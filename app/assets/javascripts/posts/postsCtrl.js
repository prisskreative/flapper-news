angular.module('flapperNews')
// Create a new controller PostsCtrl and be sure to inject the posts service
     .controller('PostsCtrl', [
     '$scope',
     'posts',
     'post',
     function($scope, posts, post){

// set a scope object called post that grabs the appropriate post from the posts service using the id from $stateParams:
     $scope.post = post;

// create an addComment function: - Call the method addComment from posts service
     $scope.addComment = function(){
        if($scope.body === '') { return; }
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user',
        }).success(function(comment) {
          $scope.post.comments.push(comment);
        });
        $scope.body = '';
     }

    $scope.incrementUpvotes = function(comment){
       posts.upvoteComment(post, comment);
     };
}]);












































