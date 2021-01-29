package PageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Testbase;
//3rd page
public class PoPropertyPage  extends Testbase{	
	public PoPropertyPage(WebDriver driver) throws IOException, InterruptedException {
		PageFactory.initElements(driver, this);		
	}
	
	@FindBy(xpath = "//h4[@class='ui-agent__name'][1]")
	public WebElement agentName;
	
	public void clickOnAgentName() throws InterruptedException {
		agentName.click();
	}
	public String getAgentName() throws InterruptedException {
		String name = agentName.getText();
		return name;
	}
	

}
