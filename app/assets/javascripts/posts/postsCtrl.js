angular.module('flapperNews')
// Create a new controller PostsCtrl and be sure to inject the posts service
     .controller('PostsCtrl', [
     '$scope',
     'posts',
     'post',
     function($scope, posts, post){

// set a scope object called post that grabs the appropriate post from the posts service using the id from $stateParams:
        $scope.post = post;

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












































