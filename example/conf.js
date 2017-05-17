var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['projStr/TestCases/testSpec.js'],
  // specs: ['projStr/TestCases/*Spec.js'],

suites:{
testspec : 'projStr/TestCases/testSpec.js',
exspec : 'projStr/TestCases/*_Spec.js',
dataprovider : 'projStr/TestCases/*_spec.js'
},

onPrepare: function() {
   jasmine.getEnv().addReporter(
   new Jasmine2HtmlReporter({
   savePath: 'test' ,
   takeScreenshotsOnlyOnFailures: false
  })
);
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000 
  }
};


