angular.module('TodoService', []).factory('Todo', ['$http', function($http) {

    return {
        // call to get all todos
        get : function() {
            return $http.get('/api/todos');
        },
		// these will work when more API routes are defined on the Node side of things
        // call to POST and create a new todo
        create : function(todoData) {
            return $http.post('/api/todos', todoData);
        },

        // call to DELETE a todo
        delete : function(id) {
            return $http.delete('/api/todos/' + id);
        }
    }       

}]);