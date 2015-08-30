angular.module('flapperNews')
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












































