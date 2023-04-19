package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;

@Service
@Transactional
public class CardService {
	CardRepository cardRepository;
	AccountRepository<Account> accountRepository;

	@Autowired
	CardService(CardRepository cardRepository, AccountRepository accountRepository) {
		this.cardRepository = cardRepository;
		this.accountRepository = accountRepository;
	}
}
