

# GitHub Contributions Fetcher

This script allows you to fetch GitHub contribution data for a specific user using the GitHub GraphQL API.

## Prerequisites

- Node.js installed on your machine
- A GitHub Personal Access Token (PAT) with the necessary permissions

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your GitHub Personal Access Token:

   ```env
   GITHUB_ACCESS_TOKEN=your_github_access_token
   ```

   Replace `your_github_access_token` with your actual GitHub Personal Access Token.

## Usage

Run the script with the desired GitHub username:

```bash
node getContributions.js your_github_username
```

Replace `your_github_username` with the GitHub username for which you want to retrieve contributions.

## Script Details

### `getContributions.js`

This script fetches GitHub contribution data for a specified user using the GitHub GraphQL API.

- **Input**: GitHub username (provided as a command-line argument).
- **Output**: Prints contribution data to the console.

## GitHub GraphQL API

The script uses the GitHub GraphQL API to query user contributions. The GraphQL query is defined in the `query` variable within the script.

## Error Handling

The script handles errors such as invalid or missing GitHub username, network issues, or API response errors.

## Note

- Ensure that your GitHub Personal Access Token has the necessary permissions.
- This script is a basic example and can be extended for more complex use cases or integrated into larger projects.
