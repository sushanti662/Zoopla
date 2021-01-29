package Runnerfile;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.testng.AbstractTestNGCucumberTests;



@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\MyJavaProject\\JavaPrograms\\new_eclipse_workspace\\Zoopla\\src\\test\\resources\\Features\\Testcase1.feature",
                 glue = { "StepDefinations" },
                 plugin = {"pretty","html:test_output",
                		            "junit:junit_report.cucumber.xml",
                			        "json:json.cucumber.json"},
                 monochrome = true
                 )

public class Runnerfile  {

}
