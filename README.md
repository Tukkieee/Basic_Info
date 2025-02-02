# Basic Info API

## Description
This is a simple Node.js API built for the HNG12 program. It provides basic information in JSON format, including:
- My registered email on the HNG12 Slack workspace.
- The current date and time in ISO 8601 format (UTC).
- The GitHub URL for this project's codebase.

## Technology Stack
- **Programming Language:** Node.js
- **Framework:** Express.js
- **CORS Handling:** Implemented using the `cors` middleware
- **Deployment:** Hosted on Vercel

## API Endpoint
### Base URL:
```
https://basic-info.vercel.app/
```

### Available Endpoint:
#### **GET /**
This endpoint returns the required details in JSON format.

**Example Response (200 OK):**
```json
{
  "email": "blessing@gmail.com",
  "current_datetime": "2025-01-29T23:33:58.033Z",
  "github_url": "https://github.com/Blessing/Basic_Info.git"
}
```

## How to Run Locally
### Prerequisites
- Ensure **Node.js** is installed on your system.

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Tukkieee/Basic_Info.git
   ```
2. **Navigate into the project directory:**
   ```sh
   cd Basic_Info
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the server:**
   ```sh
   node index.js
   ```
   The API will now be running at `http://localhost:8080/`

## Deployment
This API is publicly accessible at:
```
https://basic-info.vercel.app/
```

## Additional Resources
Looking for experienced Node.js developers? Check out:
- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---


