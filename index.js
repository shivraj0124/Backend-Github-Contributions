const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

const GITHUB_ACCESS_TOKEN = process.env.TOKEN_KEY // personal github access token

app.post('/api/contributions', async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username)
    const response = await axios.post(
      'https://api.github.com/graphql',
      {
        query: `
          query GetUserContributions($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username: username } 
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
        }
      }
    );
    

    const userData = response.data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!userData) {
      console.error('GitHub API response:', response.data);
      return res.status(response.status).json({ error: 'User not found or API response structure is unexpected' });
    }

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
