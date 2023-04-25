package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@CrossOrigin("*")
public class AccountController {
	AccountService accountService;

	@Autowired
	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}

	@PostMapping("login")
	public Account login(@RequestBody Account account) {
		return accountService.login(account);
	}

	@GetMapping(value = "findAccount", params = {"username"})
	public Account getAccountByUsername(@RequestParam("username") String uname) {
		return accountService.accountByUsername(uname);
	}

	@GetMapping(value = "findAccount", params = {"email"})
	public List<Account> getAccountsByEmail(@RequestParam("email") String email) {
		return accountService.accountsByEmail(email);
	}

	@GetMapping(value = "findAccount", params = {"phone"})
	public List<Account> getAccountsByPhone(@RequestParam("phone") String phone) {
		return accountService.accountsByPhone(phone);
	}
}
