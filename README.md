

# GitHub Contributions Fetcher

This Node.js server serves as the backend for a GitHub Contributions Viewer application. It interacts with the GitHub GraphQL API to fetch contribution data for a specified GitHub user.

## Prerequisites

- Node.js installed on your machine.
- GitHub Personal Access Token (PAT) with the necessary permissions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd your-repo/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add your GitHub Personal Access Token:

   ```env
   TOKEN_KEY=your_github_access_token
   ```

   Replace `your_github_access_token` with your actual GitHub Personal Access Token.

## Usage

Run the server:

```bash
node server.js
```

The server will run on `http://localhost:5001`.

## API Endpoint

### `POST /api/contributions`

This endpoint retrieves GitHub contribution data for a specified user.

#### Request

- **Method**: `POST`
- **URL**: `http://localhost:5001/api/contributions`
- **Body**:

  ```json
  {
    "username": "github_username"
  }
  ```

  Replace `"github_username"` with the GitHub username you want to retrieve contributions for.

#### Response

- **Success**: `200 OK`

  ```json
  {
    "totalContributions": 123,
    "weeks": [
      {
        "contributionDays": [
          {
            "contributionCount": 5,
            "date": "2023-01-01"
          },
          // ... additional contribution days
        ]
      },
      // ... additional weeks
    ]
  }
  ```

- **Error**: `400 Bad Request` or `500 Internal Server Error`

  ```json
  {
    "error": "User not found or API response structure is unexpected"
  }
  ```

## Dependencies

- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for making requests to the GitHub GraphQL API.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.

## Configuration

- **GitHub Access Token**: Ensure that your GitHub Personal Access Token is correctly set in the `.env` file.

## Contributing

Feel free to contribute to the project by creating issues or submitting pull requests.
