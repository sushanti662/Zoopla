$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/MyJavaProject/JavaPrograms/new_eclipse_workspace/Zoopla/src/test/resources/Features/Testcase1.feature");
formatter.feature({
  "line": 1,
  "name": "Zoopla Application",
  "description": "",
  "id": "zoopla-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "UseCase1",
  "description": "",
  "id": "zoopla-application;usecase1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the Zoopla application is launched for \"\u003ctestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"\u003cLocation\u003e\" in searchbox and press the search button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate list of properties page \"\u003cpropertiespagetitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "print all the price values in sorted order(descending order) on the console",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select the fifth property on the list of properties",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the property list page with logo,agentname and telephone",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on the agentname link to get into agents page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify the properties listed  belong to the same mentioned \"\u003cagentname\u003e\" on the agents page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "zoopla-application;usecase1;",
  "rows": [
    {
      "cells": [
        "testName",
        "homePageTitle",
        "Location",
        "propertiespagetitle",
        "agentname"
      ],
      "line": 18,
      "id": "zoopla-application;usecase1;;1"
    },
    {
      "cells": [
        "test1",
        "Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents",
        "London",
        "Property for Sale in London - Buy Properties in London - Zoopla",
        "Panther International Properties"
      ],
      "line": 19,
      "id": "zoopla-application;usecase1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16581206200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "UseCase1",
  "description": "",
  "id": "zoopla-application;usecase1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the Zoopla application is launched for \"test1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"London\" in searchbox and press the search button",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate list of properties page \"Property for Sale in London - Buy Properties in London - Zoopla\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "print all the price values in sorted order(descending order) on the console",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select the fifth property on the list of properties",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the property list page with logo,agentname and telephone",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on the agentname link to get into agents page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify the properties listed  belong to the same mentioned \"Panther International Properties\" on the agents page.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 40
    }
  ],
  "location": "Stepdefinition.the_Zoopla_application_is_launched_for(String)"
});
formatter.result({
  "duration": 262568100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 129917300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 11
    }
  ],
  "location": "Stepdefinition.enter_the_in_searchbox_and_press_the_search_button(String)"
});
formatter.result({
  "duration": 35604298400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027search-input-location\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-0QVDKC7\u0027, ip: \u002710.0.0.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\swaru\\AppData\\Local\\Temp\\scoped_dir2728_810525274}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:58363}, acceptInsecureCerts\u003dfalse, browserVersion\u003d89.0.4389.128, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 0480bf16682bf354f0474e57efa91ee3\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027search-input-location\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat PageObjects.PoHomePage.enterTextSearchBox(PoHomePage.java:35)\r\n\tat StepDefinations.Stepdefinition.enter_the_in_searchbox_and_press_the_search_button(Stepdefinition.java:41)\r\n\tat ✽.When enter the \"London\" in searchbox and press the search button(C:/MyJavaProject/JavaPrograms/new_eclipse_workspace/Zoopla/src/test/resources/Features/Testcase1.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Property for Sale in London - Buy Properties in London - Zoopla",
      "offset": 34
    }
  ],
  "location": "Stepdefinition.validate_list_of_properties_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.print_all_the_price_values_in_sorted_order_descending_order_on_the_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.select_the_fifth_property_on_the_list_of_properties()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.verify_the_property_list_page_with_logo_agentname_and_telephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.click_on_the_agentname_link_to_get_into_agents_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Panther International Properties",
      "offset": 60
    }
  ],
  "location": "Stepdefinition.verify_the_properties_listed_belong_to_the_same_mentioned_on_the_agents_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4778539300,
  "status": "passed"
});
});