package StepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utilities.Testbase;

public class Hooks extends Testbase {
	@Before
	public void setup() throws Exception {
	propertyExtentSetup();
	}
	@After
	public void teardown() {
		reports.endTest(logger);
		reports.flush();
		driver.close();
	}
}
