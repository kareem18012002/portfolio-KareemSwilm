# Manual deployment script for GitHub Pages
$ErrorActionPreference = "Continue"

# Build the project
Write-Host "Building project..." -ForegroundColor Green
npm run build
if ($LASTEXITCODE -ne 0) { 
    Write-Host "Build failed" -ForegroundColor Red
    exit 1
}

# Try git subtree push, which will create the branch if needed
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
git subtree push --prefix dist origin gh-pages 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
} else {
    Write-Host "Deployment encountered an issue. Trying alternative method..." -ForegroundColor Yellow
    # Alternative: Push to orphan branch manually
    git add dist -f
    git commit -m "Deploy to GitHub Pages" --no-verify
    git push origin `git subtree split --prefix dist HEAD`:gh-pages --force 2>&1
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
} else {
    Write-Host "Deployment failed" -ForegroundColor Red
    exit 1
}
