const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',  //input directory path
	reportPath: './reports/multiple-cucumber-html-report',   //Output report path
	metadata:{
        browser: {
            name: 'chrome',  //hardcoded browser
            version: '100'   //hardcoded
        },
        device: 'Local test machine',   //hardcoded
        platform: { 
            name: 'Windows',             //hardcoded
            version: '10'                //hardcoded  
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});