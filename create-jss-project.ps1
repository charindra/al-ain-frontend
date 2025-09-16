$ErrorActionPreference = "Stop"

##
## This script is used to add / initialize a JSS project using 'create-sitecore-jss'
## when this template is instantiated. It can be safely deleted.
##

Function Add-JssProject {
  Write-Host "Adding JSS sample to solution via 'npx create-sitecore-jss..."

  if ($null -eq (Get-Command "npm" -ErrorAction SilentlyContinue)) {
    Write-Host "You must install node.js, see https://nodejs.org/" -ForegroundColor Red
    Exit 1
  }
  $JSSNPMVersion = "latest"
  if ($null -eq (Get-Command "jss" -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Sitecore JSS CLI" -ForegroundColor Green
    npm install -g @sitecore-jss/sitecore-jss-cli@$JSSNPMVersion
  }

  Push-Location src
  try {
    $projectName = "alain-site-core-nextjs"
    Write-Host "Creating JSS Project for $projectName" -ForegroundColor Green

    # JSS project name transformed by our dotnet new template symbols
    $jssProjectName = "alain-site-core-nextjs"
    if ($jssProjectName -ne $projectName) {
      Write-Host "Transformed to valid JSS project name $jssProjectName" -ForegroundColor Yellow
    }

    # Construct 'create-sitecore-jss' arguments based on input and defaults
    $createArgs = @(
      "--yes",
      "create-sitecore-jss@$JSSNPMVersion",
      "--destination", $jssProjectName,
      "--appName", $jssProjectName
    )
    # Both of these values are replaced by parameters from template.json
    $jssCreateParams = "--templates nextjs,nextjs-sxa,nextjs-multisite"
    $createArgs += $jssCreateParams.Split(' ')
    npx @createArgs

    Move-Item -Force $jssProjectName rendering | Out-Null
    Push-Location rendering
    try {
      jss setup `
        --instancePath "..\..\docker\deploy\platform\" `
        --layoutServiceHost "https://cm.alain-site-core-nextjs.localhost" `
        --apiKey "09B19A15-820B-4A59-A25B-C05A16264ABE" `
        --deployUrl "https://cm.alain-site-core-nextjs.localhost/sitecore/api/jss/import" `
        --deploySecret "D82F732F6E4943FE911E2B2ED8E73EB0" `
        --nonInteractive `
        --skipValidation | Out-Null
      Update-JssProjectFiles
    }
    finally {
      Pop-Location
    }
  }
  finally {
    Pop-Location
  }
  Write-Host "Done!"
}

Function Update-JssProjectFiles {
  Write-Host "Updating JSS sample for containerized environment" -ForegroundColor Green

  # Update .gitignore
  # Values will be consistent across developers and deployment secret is an env var
  $gitignore = ".\.gitignore"
  Set-Content -Path $gitignore -Value (
    Get-Content $gitignore |
    Select-String -NotMatch "# sitecore|scjssconfig.json|\*.deploysecret.config"
  )

  ## Remove config patches since the dotnet new template provides them
  Remove-Item -Recurse -Force .\sitecore\config
}

Add-JssProject
