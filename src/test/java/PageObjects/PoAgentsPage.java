package PageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Testbase;
//4th page
public class PoAgentsPage extends Testbase {

	@FindBy(css= ".css-e13akx-Heading3-AgentHeading.e11937k16")
	public WebElement agentPageName;

	public PoAgentsPage(WebDriver driver) throws IOException {
		PageFactory.initElements(driver, this);
	}

	public String validateAgentName() throws InterruptedException {
		String name = agentPageName.getText();
		return name;
	} 

}
