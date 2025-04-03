# MSME Loans Application

This is a React application for MSME loan management with responsive UI across all device sizes.

## Deployment to Azure Static Web Apps

This application is configured for deployment to Azure Static Web Apps with continuous integration from GitHub.

### Prerequisites

- An Azure account
- A GitHub account
- Your code pushed to a GitHub repository

### Deployment Steps

1. **Create an Azure Static Web App**

   - Sign in to the [Azure Portal](https://portal.azure.com/)
   - Click "Create a resource"
   - Search for "Static Web App" and select it
   - Click "Create"
   - Fill in the following details:
     - Subscription: Select your Azure subscription
     - Resource Group: Create a new one or use existing
     - Name: "loans-app" (or your preferred name)
     - Region: Choose the region closest to your users
     - SKU: Free (for development) or Standard (for production)
     - Source: GitHub
     - Sign in to GitHub and authorize Azure
     - Organization: Select your GitHub organization
     - Repository: Select the repository for this project
     - Branch: main (or your default branch)
     - Build Presets: React
     - App location: "/" (root directory)
     - Api location: (leave empty)
     - Output location: "dist" (since this is a Vite project)
   - Click "Review + create" and then "Create"

2. **Get the Deployment Token**

   The GitHub Actions workflow requires a deployment token to authenticate with Azure. If the token wasn't automatically added to your GitHub secrets during setup:

   - Go to your Static Web App resource in the Azure Portal
   - In the left sidebar, navigate to "Settings" > "Manage deployment token"
   - Copy the deployment token

3. **Add the Token to GitHub Secrets**

   - Go to your GitHub repository
   - Click on "Settings" tab
   - Click on "Secrets and variables" > "Actions" in the left sidebar
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the deployment token you copied
   - Click "Add secret"

4. **Push Changes to Trigger Deployment**

   The GitHub Actions workflow will automatically build and deploy your application whenever you push changes to the main branch.

   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```

5. **Access Your Deployed Application**

   After the GitHub Actions workflow completes successfully, you can access your deployed application at the URL provided in the Azure Portal under your Static Web App resource.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   