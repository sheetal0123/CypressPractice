#Automation Practice Sites:
Angular Practice Site: https://rahulshettyacademy.com/angularpractice/
All Web element:  https://rahulshettyacademy.com/AutomationPractice/
Html Php website: https://rahulshettyacademy.com/seleniumPractise/#/
                  https://www.qaclickacademy.com/practice.php

Best JavaScript Learning: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

==================================================================================
#Installation
1. Install node npm  node -v, npm -v
2. Create a project folder and run foll cmd inside it
npm -i init      |   package.json will get created (e.g. pom.xml)
3. Install Cypress |  npm install cypress --save-dev 
4. Open Cypress Test Runner and double click any .js file
    node_modules\.bin\cypress open

#Futher installation(Optional)
npm install -D cypress-iframe       | req if need to deal with iframes
npm install --save-dev mocha        | 
npm install --save-dev mochawesome  | For Cypress reporting (Default Dashboard report is best)
npm install --save-dev cypress-cucumber-preprocessor  | For BDD framework (better use cypress default)
npm install multiple-cucumber-html-reporter --save-dev |  for reporting, not a good option

==================================================================================
#How to Run:

#To open Cypress Test Runner and manually run Test cases
node_modules\.bin\cypress open 

#To Run particular spec from cmd line | Headless mode
node_modules\.bin\cypress run --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js 

#With Chrome Headed Mode
node_modules\.bin\cypress run --headed --browser chrome --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js

#Passing env argument from cmd line
node_modules\.bin\cypress run --headed --browser chrome --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js --env url=https://rahulshettyacademy.com
==================================================================================
# Command Wrapping/ Short cmd

complete cmd can be entered in "package.json"(under scripts key) and use its reference
"myscript1": "node_modules\\.bin\\cypress run --headed --browser chrome --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js"

#new command:
npm run myscript1    // Headless 
npm run myscript2    // With Chrome Headed

#original cmd:
node_modules\.bin\cypress run --headed --browser chrome --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js


#To run all cases within one folder
- make folder entry inside package.json
npm run POMAllCases
==================================================================================
#Imp folder and files
package.json  | just like pom.xml
cypress.json  | cypress project related data, retry, baseUrl, for default config override
cypress/plugins/index.js : Some plugin related things
cypress/support/commands.js : common utils type methods can be added here
cypress/support/index.js : ?

cypress/fixtures : For Test Data
cypress/integration : For all test cases

==================================================================================
#Test Retry Feature
https://docs.cypress.io/guides/guides/test-retries


entry required in cypress.json
"retries": {
        "runMode": 2      
}

#Result:
Tests:        1
Screenshots:  6   | This proves retry is working
==================================================================================
#Cypress Cloud Dashboard 
https://docs.cypress.io/guides/dashboard/introduction

Open Test Runner > Runs Tabs > Connect to Dashboard
Setup Project > Give some name

#Auto generated code
"projectId": "nfd6nb"   |  auto generated and auto saved in cypress.json

#To run test cases 
node_modules\.bin\cypress run --record --key 2bebfd02-4cd8-4220-8903-206b2bfb8c19
node_modules\.bin\cypress run --record --key 2bebfd02-4cd8-4220-8903-206b2bfb8c19 --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js

Results: 
https://dashboard.cypress.io/projects/nfd6nb/runs/1/overview
https://dashboard.cypress.io/projects/nfd6nb/runs/4/specs

==================================================================================
#Reporting

1. Use default Cypress Dashboard (best)
2. MochaAwesome Report
https://www.npmjs.com/package/mochawesome

npm install --save-dev mocha
npm install --save-dev mochawesome

https://docs.cypress.io/guides/tooling/reporters#Installed-locally
add entry in cypress.json 
"reporter": "mochawesome"

#cmd
node_modules\.bin\cypress run --headed --browser chrome --reporter mochawesome --spec cypress/integration/oceanblue/PageObjectModel/TestClass.js

Report path:
\CypressPractice\mochawesome-report\mochawesome.html
\CypressPractice\mochawesome-report\mochawesome.json


==================================================================================
#CICD Jenkin

Downlaod Jenkin.war  https://www.jenkins.io/download/
java -jar jenkins.war -httpPort -9090

Create choice parameterized job accepting Script name like myscript1, myscript2 (package.json)

Add cmd in Shell script 
npm run "$Script"
==================================================================================
# Cypress Cucumber BDD Integration
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

#install (entry get auto updated in package.json)
npm install --save-dev cypress-cucumber-preprocessor

#Add entry in plugin > index.js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {                //method is already present
  on('file:preprocessor', cucumber())            
}

#Add into cypress.json | cypress now will run .feature files also along with .js
"testFiles": "**/*.feature"   //This will not show and run .js file in Test Runner, so avoid this syntax
"testFiles": "**/*.*",        //Use this

#Add into package.json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

#Install plugin | for Automcomplete
https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

#Step Def
StepDef folder name should be same as feature file name

#How to run feature file
node_modules\.bin\cypress run --spec cypress\integration\oceanblue\CucumberFW\ecommerce.feature --headed --browser chrome
npm run ecommercebdd

#To run all features files
node_modules\.bin\cypress run --spec cypress\integration\oceanblue\CucumberFW\*.feature --headed --browser chrome

#Run features file as per tags
'node_modules\.bin\' can be refered by 'npx '
node_modules\.bin\cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

#Cucumber HTML Report:
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor > Output
package.json > cypress-cucumber-preprocessor > cucumberJson section required
On running cucumber tests, "cypress/cucumber-json" folder will be generated with .json report

Any of following reporter can be used to get Html report
1. https://github.com/wswebcreation/multiple-cucumber-html-reporter
2. https://github.com/jenkinsci/cucumber-reports-plugin   (For Jenkin)


1. This report simply convert generated cucumber json Output into report
Note: This is not generating automatically. Not very usefuly as it uses lot of hardcoding

npm install multiple-cucumber-html-reporter --save-dev
create multiple-cucumber-html-reporter.js file and place on root folder
update jsonDir and reportPath variable in it

Run the JS file : node multiple-cucumber-html-reporter.js
Generated Report Path: C:\repo_personal\CypressPractice\reports\multiple-cucumber-html-report\index.html


==================================================================================
#How to Write CSS
1. Id         = #id

2. Class Name = .classname 
              = tagname.classname  (e.g. input.myClass)
              = button.btn.btn-info (if classname have space then replace it with '.' e.g class="btn btn-info")  
      
3. Attributes = input[type="checkbox"]    || tagname[attr = 'val']
              = [name='Confirm']          || [attr = 'val'] 
              = h1[class*='pricing-title']|| Used regex, actual classname is "pricing-title text-white ls-1" 
                                             e.g: .find("a[href*='mentorship']").eq(0).click() 

4. Traversing Parent to Child (Used to traverse list etc)
           = .classname > img     || Here we used classname > tagname 
           = .ui-menu-item div    || Here we used classname <space> tagname
            
5. Selecting nth child in list, row, column etc
      = table[name="courses"] > tbody tr td:nth-child(2) | Here we select complete 2nd column
        form div:nth-child(1) input
        input[name='name']:nth-child(2)
        :nth-child(7) > :nth-child(4) > .form-check-label
==================================================================================
#Drop Down

#Static
cy.get('locator').select("Male").should("have.value","Male");

#Dynamic 
cy.get('#autocomplete').type("ind");
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India" ){
                cy.wrap($el).click();
            }       
        })   
        
//Verification
cy.get('#autocomplete').should("have.value","India");

==================================================================================
#For each loop on web element
cy.get('.ui-menu-item div').each(($el, index, $list) => {
            
           //const textVal = $el.text();   //get text
           var textVal = $el.text();    //both const/var are ok to use

          if(textVal === "India" ){
                cy.wrap($el).click();
                cy.wrap($el).contains("ADD TO CART").click()
          }       
})            

#For each loop on Array
var dataArray = ["Blackberry","Nokia Edge"]
//Style1
dataArray.forEach(data => 
    cy.selectProduct(data)
);

//Style2    
dataArray.forEach(function(data){
    cy.selectProduct(data);
});

==================================================================================

IfEslse
if(itemText.includes("abc")) { }
if(itemText === "India" ){ } 

==================================================================================
#How to get text on Element, getText, fetch text

#Style 1
cy.get("locator").then(function(element){
                const actualText = element.text();
                cy.log(">>> "+actualText);    
                expect(actualText.includes("Success")).to.be.true
            })

#Style 2:
for each loop
var textVal = $el.text(); 

#Style 3:
For only text verification on element check #Assertion section


==================================================================================

#Events
https://docs.cypress.io/api/events/catalog-of-events#App-Events


==================================================================================

How to modify HTML:
We can invoke JQuery functions to modify HTML
E.g.: Here we removed one attribute 'target'
cy.get("#opentab").invoke("removeAttr","target").click();


==================================================================================
# Assertions
https://docs.cypress.io/guides/references/assertions

#Chai
cy.url().should("include","abc")
cy.get('.brand').should('have.text', 'GREENKART')
cy.get(":nth-child(4) > .ng-untouched").should("have.value","Red") 
cy.contains('.brand', 'GREENKART')
cy.get(".products").find(".product").should("have.length", 4)

#Mocha
expect(text).to.match(/ART/)
expect(text).to.include('GREENKART')
expect(text).not.to.include('REDKART')
expect(actualText.includes("Success")).to.be.true

#Behaviour Checking
cy.get('#checkBoxOption1').check().should("be.checked").and("have.value","option1");
cy.get('#checkBoxOption1').uncheck().should("not.be.checked");
cy.get("locator").should("be.disabled")
==================================================================================

#Fetch Attribute Values:
cy.get("locator").then(function(el){
            var hrefValue = el.prop("href");
            cy.log("Href: "+ hrefValue);
        })

#Style 2: Only attribute verification
webelement : <input minlength="2"> 
cy.get("input").should("have.attr","minlength","2")
==================================================================================

#iFrame handling

npm install -D cypress-iframe

/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>
import 'cypress-iframe'

    //cy.iframe() need to be used everytime  
    it("iframe example", function(){
        cy.visit("website");
        cy.frameLoaded("locator")
        cy.iframe().find("locator").eq(0).click();  //style 1
        cy.iframe().find("locator").eq(0).click();  //style 2 
        cy.iframe().find("locator").should("have.length","2");
    })
==================================================================================
#To handle multiple siblings, child elements, list etc
In selenium we use xpath like /tr[1]/td[2]

With eq(index) we can reach to specific array element
cy.get("ParentLocator").find("ChildLocator").eq(2).contains("ADD TO CART").click();
cy.get("ParentLocator").find("ChildLocator").eq(2).click();
cy.contains("Place Order").click();

==================================================================================
# Hooks
https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks

before(once) > beforeEach(everytime) > test > afterEach() > after()

==================================================================================
#Debug in Cypress

cy.pause()
cy.debug()
cy.wait(2000)
cy.log()
Select steps in Cypress Left Panel and check console
    Browser > right click > inspect > console

Q: Error: is being covered by another element
A: We can try force click 

Q: Code not working after updating cypress.json
A: Need to restart cypress runner

Q: cypress dont maintain cookies from one test to another.Need to login everytime for a new test case.
A: https://docs.cypress.io/api/cypress-api/cookies#Defaults
   Cypress.Cookies.preserveOnce() and Cypress.Cookies.defaults
   This keep you logged in which executing multiple test cases in the same session.



==================================================================================
#Configuration

Cypress Dashboard > Settings > Configuration >
defaultCommandTimeout = 4000 ms  | This is default timeout by Cypress
default setting can be overriden by cypress.json file | impact globally for FW
https://docs.cypress.io/guides/references/configuration#Timeouts


==================================================================================

Imp Question:
Q: Diff between cy.get("a").find("b") and cy.get("a b")
A: Same, no difference
   https://stackoverflow.com/questions/52103005/cypress-any-difference-between-cy-geta-findb-and-cy-geta-b

==================================================================================
