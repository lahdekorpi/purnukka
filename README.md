# Purnukka
A tiny browser and URL based encryption tool to share text safely.

With this tool, you can create URL's that contain your passwordd encrypted message in the hash part of the URL.
Opening this URL shows a decryption UI that'll let you decrypt the message with the password.

It's fully on the client side and runs on JavaScript with [crypto-js](https://github.com/brix/crypto-js). The data, even when encrypted isn't being sent to the server.

![Screenshot of the encryption](http://pic.useful.fi/9e9a21c9bf62752e02661084272503e4.png)

![Screenshot of the decryption](http://pic.useful.fi/fcf56bb2c5f523c5092e258741ca15d2.png)

Uses Bootstrap with the [Simplex](http://bootswatch.com/simplex/) theme and [crypto-js](https://github.com/brix/crypto-js).
Data is encrypted with AES.

License: MIT
