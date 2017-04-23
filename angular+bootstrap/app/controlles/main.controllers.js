angular.module('Controllers', ['Services'])
    .controller('mainCtrl', mainCtrl)



function mainCtrl (mainService){
    this.user = mainService.user;//передаєм дані
    this.tasks = mainService.userTask;//передаєм масив
    this.addNewTask = function(item){
        var task ={
            name:item,
            done:false
        };
        mainService.addTask(task);
        this.item = null;
    };
    
    this.deleteTask = function(index){
        mainService.deleteTask(index);
    };
};