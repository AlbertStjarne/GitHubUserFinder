# GitHub Finder - search for GitHub users

A search page using the GitHub API for users returning the user with information and the users latest repositories.

Since the number of calls can be high it has been set as an OAuth App. Follow below link to create your own and add your client_id and client_secret to the project. I have omitted the keys, so replace 'YOUR-ID-HERE'. The application works without entering the id:s but is restricted to the number of searches per hour.
[New GitHub OAuth App](https://github.com/settings/applications/new)
[Rate limits](https://developer.github.com/v3/search/#rate-limit)

As soon as you start writing in the search box the call will be made and GitHub user is presented. If there is no match in the GitHub name an alert will be shown.

Bootstrap with the bootswatch theme has been used for styling.
[bootswatch](https://bootswatch.com)


## A screenshot

Searching for my name

<img src="desktop.gif" width=700>


## Author
* Albert Stjärne (https://github.com/AlbertStjarne)