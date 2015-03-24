OAuth 2 Attacks
===============

This is a simple flask app that allows a user to log in using their
Facebook account. You need to create a Facebook app and store its
App ID and App Secret inside a file called

    credentials_local.py

with the following format

    settings = {
        "FACEBOOK_APP_ID": "appid",
        "FACEBOOK_APP_SECRET": "appsecret",
    }

Then, run csrf.py and try to log in using Facebook
