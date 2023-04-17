package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.PersonalAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"}, allowCredentials = "true")
public class PersonalAccountController {
	PersonalAccountService personalAccountService;

	@Autowired
	public PersonalAccountController(PersonalAccountService personalAccountService) {
		this.personalAccountService = personalAccountService;
	}
}
