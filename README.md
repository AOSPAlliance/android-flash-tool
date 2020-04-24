Some early work on trying to use https://flash.android.com/ with alternative builds.

## Running
* Bring up the environment with docker-compose
```
docker-compose up --build --force-recreate
```
* Go to http://localhost:8080

## Notes
* There are two primary domains `flash.android.com` and `secure.flash.android.com`. The `index.html` pages for both of these domains need to update the `WEB_FLASHSTATION_SECURE_*` variables to point at each other. In this case, I've setup `flash.android.com` to listen on `localhost:8080` and `secure.flash.android.com` to listen on `localhost:8081`
* The various other javascript and HTML files have just been copied as is other than pretty printing.
* My current approach is to just duplicate any API calls and respond back with static responses and see if that will get us through the provisioning process. There is nodejs express server with a few of the API calls that I've bumped into so far.
