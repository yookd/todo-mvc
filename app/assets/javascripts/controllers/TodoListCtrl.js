angular
  .module('TodoListCtrl', [])
  .controller('TodoListCtrl', function($scope) {

    $scope.todoLists = [];

    /*
     * Create a new todo list
     * with default title "Sample title" and one list item
     * with description "This is a task"
     */
    $scope.createTodoList = function() {

      // Create a default template list
      $scope.todoLists.push({
        title: '',
        items: [
          { description: '' }
        ]
      });

    };

    /*
     * Save a new todo list
     * POST to /todo_lists
     *
     */
    $scope.saveTodoList = function() {

    };

  });