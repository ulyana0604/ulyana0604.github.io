angular.module('Services', [])
    .factory('mainService', mainService)


function mainService(){
  var data = {
    user:"Ulyana Antsiferova",
      userTask:[
          {
          name:"Learn JavaScript",
              done: false
          },
          {
              name:"Angular JS",
              done:false
          },
          {
              name:"Винести мусор",
              done:false
          },
          {
              name:"Погуляти з собакою!",
              done:false
          }
      ],
      
      addTask:function(item){
          this.userTask.push(item);
      },
      
      deleteTask:function(index){
          this.userTask.splice(index, 1);
      }
      
  };
    return data;
};