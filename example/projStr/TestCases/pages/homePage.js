/*
module.exports = {  
    toDo: {  
        addField: element(by.css('[placeholder="add new todo here"]')),  
        checkedBox: element(by.model('todo.done')),  
        addButton: $('[value="add"]'),
        YourName:  element(by.model('yourName'))

    },  
      
    go: function() {  
       browser.get('https://angularjs.org/'); //overrides baseURL  
        browser.waitForAngular();  
    },  
      
    addItem: function(item) {  
        var todo = this.toDo;  
        todo.addField.isDisplayed();  
        todo.addField.sendKeys(item);  
        todo.addButton.click();  
    },  

    simpleTest: function(WhatToExpect)
    {
    var todo = this.toDo;  
        todo.YourName.clear();
        todo.YourName.sendKeys(WhatToExpect);
        console.log("IT is --->  "+  element(by.binding('yourName')).getText().then(console.log));
        expect(element(by.binding('yourName')).getText()).toEqual('Hello '+WhatToExpect+'!');
     }
};*/

//for jet Blue 
module.exports={

    menu:{
        plan_a_Trip:$('.foreground-sprite')
    },

menuFuncyionalityTest: function()
{
 browser.get('https://www.jetblue.com/#/'); //overrides baseURL  
 browser.driver.manage().window().maximize();
 browser.waitForAngular();    
 
this.menu.plan_a_Trip.click();
console.log("IT is --->  "+  element(by.css('.nav-sections')).getText().then(console.log));
}
};