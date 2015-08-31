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
// with resolve property of ui-router we are ensuring that anytime our home state is entered, we will automatically query all posts from our backend before the state actually finishes loading.
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
            controller: 'PostsCtrl',
//  detects we are entering the posts state and will then automatically query the server for the full post object, including comments
            resolve: {
                post: ['$stateParams', 'posts', function($stateParams, posts) {
                  return posts.get($stateParams.id);
                }]
              }  
          });
      
         $urlRouterProvider.otherwise('home');

    }]);




  





  