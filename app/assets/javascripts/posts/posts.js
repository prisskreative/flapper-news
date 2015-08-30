 angular.module('flapperNews')
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
}]);

