
var toDoPage=require('./pages/homePage.js');
var using = require('jasmine-data-provider');

describe('angularjs homepage', function() {
 it('should navigate to the AngularJS homepage', function() {  
    toDoPage.go();  
    
  });  
    
  it('should let you add a new task ', function() {  
   toDoPage.addItem('New Task Item')  
     element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });


it('should behave be done via function', () => {
   toDoPage.go();  
    toDoPage.addItem('New Task Item') 
  toDoPage.simpleTest('Gurwinder');
});
  

});


describe('This is the suit desc', () => {
  
  it('and should behave...', () => {
     toDoPage.go();  
     toDoPage.addItem('New Task Item') 
     toDoPage.simpleTest('Affi');
  });
  
  it('and should behave...', () => {
     toDoPage.go();  
     toDoPage.addItem('New Task Item') 
     toDoPage.simpleTest('imran');
  });
    
});

var UserInformation = require('./module/initialData.module.js');
describe('This is the suit desc', () => {
  
  it('and should behave...', () => {
     toDoPage.go();  
     toDoPage.addItem('New Task Item') 
     toDoPage.simpleTest('Affi');
  });
  
  it('and should behave...', () => {
     toDoPage.go();  
     toDoPage.addItem('New Task Item') 
     toDoPage.simpleTest('imran');
  }); 
    
});
  