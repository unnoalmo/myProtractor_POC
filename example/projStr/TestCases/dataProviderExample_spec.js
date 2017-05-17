
var toDoPage=require('./pages/homePage.js');
var using = require('jasmine-data-provider');
/*
var UserInformation = require('./module/initialData.module.js');
describe('This is the suit desc', () => {


   using(UserInformation.UserInfo, function(data, description) {

		it("Angular Info " + description, function() {
	   toDoPage.go();  
     toDoPage.addItem('New Task Item') 
     // browser.debugger();
     toDoPage.simpleTest(data.name);	
     toDoPage.simpleTest(data.age);	
     toDoPage.simpleTest(data.nationality);	
  })
});
    
});*/


describe('to simulate mouse over action', function() {
  
  it('SIMULATE MENU', function() {
    toDoPage.menuFuncyionalityTest();
    
  });
    

});
  



  