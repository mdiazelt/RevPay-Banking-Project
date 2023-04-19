package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;

@Service
@Transactional
public class AccountService {
	AccountRepository<Account> accountRepository;

	@Autowired
	public AccountService(AccountRepository<Account> accountRepository) {
		this.accountRepository = accountRepository;
	}

	public Account login(Account account) {
		Account a = accountRepository.findByUsernameAndPasswd(account.getUsername(), account.getPasswd());
		/*
		if (a != null)
			a.setSessionToken((long)(Math.random() * Long.MAX_VALUE));
		*/
		return a;
	}
}
