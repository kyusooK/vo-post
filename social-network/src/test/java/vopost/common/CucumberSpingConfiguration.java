package vopost.common;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import vopost.SocialNetworkApplication;

@CucumberContextConfiguration
@SpringBootTest(classes = { SocialNetworkApplication.class })
public class CucumberSpingConfiguration {}
