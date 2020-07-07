# PsIoT Website

Website for an Austin-based IoT company

## Run this project locally

This project uses node to run the html pages and serve the public folder and images.

- To run it:
  ```bash
    yarn start
  ```

## Deploying to Azure

- When deploying to either prod or staging the user credentials are as follows:

  - User: `solarinUser`
  - Pword: `solarinRocks!`

### STAGING

- Before deploying anything to production you should deploy to the staging web app first to test to make sure everything looks good and works as expected
- To deploy code to staging:
  - Add `https://psiot-staging.scm.azurewebsites.net:443/psiot-staging.git` to your git remote using `git remote add azure-staging https://psiot-staging.scm.azurewebsites.net:443/psiot-staging.git`
  - Then deploy to Azure using `git push azure-staging`, this will build the web app remotely on the staging web app
  - The code is live at [https://psiot-staging.azurewebsites.net/](https://psiot-staging.azurewebsites.net/)
- This is currently configured within the [Deployment Center in Azure](https://portal.azure.com/#@solarintechnologies.com/resource/subscriptions/2c307d7e-4547-416e-8371-6e008eec0766/resourceGroups/psiot-staging/providers/Microsoft.Web/sites/psiot-staging/vstscd)

### PRODUCTION SITE

- To deploy this code to the web app you must to the following:
  - Add `https://psiot-site.scm.azurewebsites.net:443/psiot-site.git` to your git remote using `git remote add azure https://psiot-site.scm.azurewebsites.net:443/psiot-site.git`
  - Then deploy to Azure using `git push azure`, this will build the web app remotely
- This is currently configured within the [Deployment Center in Azure](https://portal.azure.com/#@solarintechnologies.com/resource/subscriptions/2c307d7e-4547-416e-8371-6e008eec0766/resourceGroups/psiot-site/providers/Microsoft.Web/sites/psiot-site/vstscd)

* The Azure web app that runs this site is [here](https://portal.azure.com/#@solarintechnologies.com/resource/subscriptions/2c307d7e-4547-416e-8371-6e008eec0766/resourceGroups/psiot-site/providers/Microsoft.Web/sites/psiot-site/appServices)

## Fonts

- This project manages the logo icons using fonts
- [IcoMoon](https://icomoon.io) is what is currently being used
  - To create new fonts. You can go to this site, upload photos and then click generate fonts.
  - You need to upload the output files to the fonts folder and add the html and css

### The Hack

- To get the above fonts to work for me, I had to use this [site](https://www.pngtosvg.com/) to import a png and then convert it to an SVG.
- Then I took this new svg and uploaded it to to Icomoon
- Downloaded the their generated font => put it in the fonts folder to replace the existing
- Then added the html and css that Icomoon provides on their site
