// ui-router external module - include it as a dependency in our app:

angular.module('flapperNews', ['ui.router'])

// to use the Angular config() function to setup a home state.
   .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
      
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
          })
 // Post page - add a state where an individual post can be accessed
           .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
          });
      
        $urlRouterProvider.otherwise('home');

    }])




  // angular services
    .factory('posts', [function(){
  // service body
  // by exporting an object that contains the posts array we can add new objects and methods to our services in the future
  // What we're doing here is creating a new object that has an array property called 'posts'. 
  // We then return that variable so that our o object essentially becomes exposed to any other Angular module that cares to inject it.
      var o = {
         posts: []
      };
      return o;
    }])

// Inject posts service into MainCtrl
    .controller('MainCtrl', [
    '$scope',
    'posts', // by adding posts here and in the function argument

// The $scope variable serves as the bridge between Angular controllers and Angular templates

  function($scope, posts){
      $scope.test = 'Hello world!'; // two-way data-bindings function

// Now any change or modification made to $scope.posts will be stored in the service and immediately accessible by any other module that injects the posts service.
      
      $scope.posts = posts.posts;

// List replace with service and code above
// new scope variable that defines a list of post titles ng-repeat directive.

   /*   $scope.posts = [
         {title: 'post 1', upvotes: 5},
         {title: 'post 2', upvotes: 2},
         {title: 'post 3', upvotes: 15},
         {title: 'post 4', upvotes: 9},
         {title: 'post 5', upvotes: 4}
      ]; */

// Create a $scope function that will add an object into the posts array:

   $scope.addPost = function(){
   	// prevent user from submitting blank title
   	if(!$scope.title || $scope.title === '') { return; } 
    $scope.posts.push({
    	title: $scope.title,
    	link: $scope.link,
    	upvotes: 0,
    // Add Fake comment data
        comments: [
           {author: 'Joe', body: 'Cool post!', upvotes: 0},
           {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]       
    });
    $scope.title = ''; // prevent blank title
    $scope.link = ''; // prevent blank link
    };

// Create the incrementUpvotes function in our controller:
   // passing current instance of post to function

   $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
   };

}])


// Create a new controller PostsCtrl and be sure to inject the posts service
     .controller('PostsCtrl', [
     '$scope',
     '$stateParams',
     'posts',
     function($scope, $stateParams, posts){

// set a scope object called post that grabs the appropriate post from the posts service using the id from $stateParams:
        $scope.post = posts.posts[$stateParams.id];

// create an addComment function:
        $scope.addComment = function(){
          if($scope.body === '') { return; }
          $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
          });
          $scope.body = '';
        };

}]);





























  