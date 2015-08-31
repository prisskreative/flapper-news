// ui-router external module - include it as a dependency in our app: - inject the templates module into angular app

angular.module('flapperNews', ['ui.router', 'templates'])

// to use the Angular config() function to setup a home state.
   .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
      
         $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl',
            resolve: {
                postPromise: ['posts', function(posts){
                  return posts.getAll();
                }]
              }          
          })
 // Post page - add a state where an individual post can be accessed
          .state('posts', {
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl'
          });
      
         $urlRouterProvider.otherwise('home');

    }]);




  





  