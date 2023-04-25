package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.PersonalAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class PersonalAccountController {
	PersonalAccountService personalAccountService;

	@Autowired
	public PersonalAccountController(PersonalAccountService personalAccountService) {
		this.personalAccountService = personalAccountService;
	}

	@PostMapping("personal/register")
	public PersonalAccount newPersonal(@RequestBody PersonalAccount personalAccount) {
		return personalAccountService.newPersonal(personalAccount);
	}
}
