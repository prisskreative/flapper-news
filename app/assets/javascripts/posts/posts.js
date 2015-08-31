 angular.module('flapperNews')
 // angular services
 // Inject the $http service:
    .factory('posts', [
    '$http',
      function($http){
         var o = {
            posts: []
         };
      
  // get all posts in the service within posts.js
      o.getAll = function() {
        return $http.get('/posts.json').success(function(data){
          angular.copy(data, o.posts);
      });
  }

  // Add method Create new posts
      o.create = function(post) {
        return $http.post('/posts.json', post).success(function(data){
          o.posts.push(data);
      });
  }

  // Add another method to our service
      o.upvote = function(post) {
        return $http.put('/posts/' + post.id + '/upvote.json')
          .success(function(data){
            post.upvotes += 1;
      });
  }

  // Add method to retrieve a single post from our server
      o.get = function(id) {
        return $http.get('/posts/' + id + '.json').then(function(res){
          return res.data;
        });
  }     

  // Add comments method
      o.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
  }

  // Enable upvoting on comments
      o.upvoteComment = function(post, comment) {
        return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
          .success(function(data){
            comment.upvotes += 1;
          });
  };



return o;

}]);


