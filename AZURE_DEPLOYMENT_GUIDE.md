# Azure Static Web Apps Deployment Guide

This guide provides accurate steps to deploy this React application to Azure Static Web Apps.

## Option 1: Azure Portal Deployment (Recommended)

This is the simplest approach and automatically sets up GitHub Actions integration:

1. **Create the Static Web App resource**:
   - Sign in to the [Azure Portal](https://portal.azure.com/)
   - Click "Create a resource"
   - Search for "Static Web App" and select it
   - Click "Create"
   - Fill in the basic details:
     - Subscription: Select your Azure subscription
     - Resource Group: Create a new one or use existing
     - Name: "loans-app" (or your preferred name)
     - Plan type: Free or Standard
     - Region: Choose the region closest to your users

2. **Link your GitHub repository**:
   - Deployment source: GitHub
   - Sign in to GitHub and authorize Azure
   - Organization: Select your GitHub organization
   - Repository: Select your repository
   - Branch: main (or your default branch)

3. **Configure build settings**:
   - Build Presets: React
   - App location: "/" (root directory)
   - Api location: (leave empty if you don't have an API)
   - Output location: "dist" (since this is a Vite project)

4. **Review and create**:
   - Click "Review + create"
   - After validation passes, click "Create"

**Important**: When you use this approach, Azure automatically:
- Creates a GitHub Actions workflow file in your repository
- Adds the necessary deployment token as a GitHub secret
- Sets up continuous deployment from your GitHub repo

You don't need to manually find or add the deployment token.

## Option 2: Azure CLI Deployment

If you prefer using the command line:

1. **Install the Azure CLI** and sign in:
   ```bash
   # Install Azure CLI (if not already installed)
   brew install azure-cli

   # Sign in to Azure
   az login
   ```

2. **Create a Static Web App**:
   ```bash
   az staticwebapp create \
     --name "loans-app" \
     --resource-group "your-resource-group" \
     --source "https://github.com/YOUR-USERNAME/YOUR-REPO" \
     --branch "main" \
     --app-location "/" \
     --output-location "dist" \
     --login-with-github
   ```

   This command will prompt you to authenticate with GitHub and will automatically set up the GitHub Actions integration.

## Option 3: Manual Deployment (Without GitHub Actions)

If you're having trouble with GitHub Actions or prefer a manual approach:

1. **Build your application locally**:
   ```bash
   npm run build
   ```

2. **Deploy using Azure CLI**:
   ```bash
   # Create the static web app (if not already created)
   az staticwebapp create \
     --name "loans-app" \
     --resource-group "your-resource-group"

   # Deploy the built files
   az staticwebapp deploy \
     --name "loans-app" \
     --resource-group "your-resource-group" \
     --source "dist"
   ```

## Troubleshooting

- **GitHub Actions fails**: Check if the workflow file exists in `.github/workflows/` in your repository. If not, you may need to re-link your repository in the Azure Portal.

- **Missing deployment token**: If the GitHub Action is failing due to missing token:
  - Go to your Static Web App in Azure Portal
  - Navigate to "GitHub Actions settings" (or similar menu item)
  - Look for an option to reconnect or regenerate the token
  - Alternatively, disconnect and reconnect your GitHub repository

Remember that the exact UI and options in the Azure Portal may change over time, so the menu items might be slightly different from what's described here.