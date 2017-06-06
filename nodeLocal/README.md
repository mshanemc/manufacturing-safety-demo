## Local app setup

1. You'll need the IP address of your Hue bridge (ask the router that the bridge is connected to for this)
2. You'll need the userid for connecting to the Hue.  If you're getting auth errors, try following these directions: https://www.developers.meethue.com/documentation/getting-started
3. You'll need the Id from the light bulb that you want to change the color of.  typically an integer representing the order that the bulb became associated with that bridge.
4. If you haven't created a connected oAuth app, do that (Setup>Apps>New Connected App)

### local environment exports

* `export LIGHTIP=192.168.1.73` //from step 1
* `export LIGHTUSER=IVhogkeTowDCDoydFxlQq30wgl25lSUvtPieHqgY` //from step 2
* `export LIGHTID=4` //from step 3
* `export CLIENTID=[your connected app's client id]` //from step 4
* `export CLIENTSECRET=[your connected app's client secret]` //from step 4
* `export SFUSER=user@domain.com` //your salesforce username for the org
* `export SFPASS=P455W0rD!` //your salesforce password

## Run it

`heroku local` or `node hue-safety-demo.js`
