package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.BusinessAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"}, allowCredentials = "true")
public class BusinessAccountController {
	BusinessAccountService businessAccountService;

	@Autowired
	public BusinessAccountController(BusinessAccountService businessAccountService) {
		this.businessAccountService = businessAccountService;
	}

	@PostMapping("business/register")
	public BusinessAccount newBusiness(@RequestBody BusinessAccount businessAccount) {
		return businessAccountService.newBusiness(businessAccount);
	}
}
