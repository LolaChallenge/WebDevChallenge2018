###Vulnerabilities

1.- In the counter, not exist a conditional that only increase the number if the user has been conected by twitter.
2.- All the process has been based in the ID, i think that the correct way is to use the token. The token is the user's key to follow the way of the user in the web app.
3,. In main.js, line 32. The user's paswordd has been exposed when we send count in a external server.