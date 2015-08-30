Installing Bower to manage dependencies
=======================================

Bower
-----

Bower is a command line utility that lets us manage our front-end dependencies with a bower.json file (think Gemfiles for front-end). 

npm install -g bower

bower init

Create a .bowerrc file in the root our Rails project.

touch .bowerrc


This is a configuration file for bower where we'll specify where we want our dependencies installed.

We'll save them in vendor/assets/bower_components by providing the following configuration:

 {
  "directory":"vendor/assets/bower_components"
 }

bower install angular angular-ui-router bootstrap --save       

The --save flag automatically adds them to bower.json


Now that we have our dependencies installed locally we can use sprockets directives to require them in application.js/css. 

Sprockets will automatically require the right file based off of the package name, as long as that package's bower.json has its main attribute set properly.

Avoid installing front-end dependencies in multiple places when you're using bower, as this could lead to the wrong file being required (for example, if you had the angularjs-rails in your Gemfile AND angular in your bower.json).








