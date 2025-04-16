# Deploying React App to AWS Amplify

This guide will walk you through deploying your React application to AWS Amplify.

## Prerequisites

1. An AWS account
2. AWS CLI installed and configured
3. Git repository for your code (GitHub, GitLab, BitBucket, etc.)

## Method 1: Deploy via AWS Amplify Console (Recommended)

### Step 1: Push your code to a Git repository

If your code is not already in a Git repository, create one and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 2: Sign in to AWS Amplify Console

1. Go to the [AWS Management Console](https://console.aws.amazon.com/)
2. Search for "Amplify" and open the Amplify Console
3. Click "New app" > "Host web app"

### Step 3: Connect your repository

1. Choose your Git provider (GitHub, GitLab, BitBucket, etc.)
2. Connect your account if not already connected
3. Select your repository and branch

### Step 4: Configure build settings

Amplify will automatically detect that this is a React app and suggest build settings. You can use the default settings or customize them:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 5: Review and deploy

1. Review the settings and click "Save and deploy"
2. Amplify will build and deploy your app
3. Once complete, you'll get a URL where your app is hosted

## Method 2: Deploy via AWS CLI

### Step 1: Install the Amplify CLI

```bash
npm install -g @aws-amplify/cli
```

### Step 2: Configure Amplify

```bash
amplify configure
```

This will:
1. Open a browser window to sign in to your AWS account
2. Create a new IAM user with appropriate permissions
3. Provide you with an access key ID and secret access key

### Step 3: Initialize Amplify in your project

```bash
amplify init
```

Follow the prompts to:
1. Enter a name for your project
2. Choose your default editor
3. Choose the type of app you're building (JavaScript)
4. Choose your JavaScript framework (React)
5. Choose your source directory path (src)
6. Choose your distribution directory (build)
7. Choose your build command (npm run build)
8. Choose your start command (npm start)

### Step 4: Add hosting

```bash
amplify add hosting
```

Choose:
1. "Hosting with Amplify Console"
2. "Manual deployment"

### Step 5: Deploy

```bash
amplify push
```

This will deploy your app to AWS Amplify.

## Method 3: Deploy using a Zip File

If you prefer to deploy without Git integration:

### Step 1: Create a production build

```bash
npm run build
```

### Step 2: Create a zip file of the build folder

```bash
# On Windows PowerShell
Compress-Archive -Path .\build\* -DestinationPath .\build.zip -Force

# On Linux/Mac
zip -r build.zip build/
```

### Step 3: Deploy using AWS CLI

```bash
aws amplify start-deployment --app-id YOUR_APP_ID --branch-name main --region us-east-1 --source-url file://build.zip
```

Replace `YOUR_APP_ID` with your actual Amplify app ID.

## Environment Variables

If your app uses environment variables (like API endpoints), configure them in the Amplify Console:

1. Go to your app in the Amplify Console
2. Navigate to "Environment variables"
3. Add your variables (e.g., `REACT_APP_API_URL`)

## Custom Domain

To add a custom domain:

1. Go to your app in the Amplify Console
2. Navigate to "Domain Management"
3. Click "Add Domain"
4. Follow the instructions to configure your domain

## Troubleshooting

- **Build failures**: Check the build logs in the Amplify Console
- **Environment variables not working**: Make sure they start with `REACT_APP_`
- **API connection issues**: Check CORS settings and API endpoints
- **Deployment errors**: Ensure your AWS credentials have the necessary permissions 