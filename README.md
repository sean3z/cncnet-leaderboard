# cncnet-leaderboard
CnCNet Leaderboard site built in Angular

![Screenshot](http://i.imgur.com/Z45TZcU.png)

## Contributing
The below subjects outline how to extend the functionality of this project. Any help is warmly accepted and greatly appreciated! :)

#### Extending the Leaderboard UI
The web interface is primarily built in javascript using [Angular](https://angularjs.org/) and [Angular UI router](http://angular-ui.github.io/ui-router/site).

Development requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/download.html) installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem install sass` to install Sass.

Afterwards, run `npm install` again to ensure you've installed all the devDependencies within package.json. Once all dependencies have been installed, run `grunt serve` and visit [http://localhost:4007/](http://localhost:4007/). The serve-app-dev task initiates watchers on the leaderboard apis and web ui, so any changes will trigger automatic restart or compile.
