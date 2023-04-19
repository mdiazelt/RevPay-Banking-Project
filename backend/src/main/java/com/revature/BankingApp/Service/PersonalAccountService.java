package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;

@Service
@Transactional
public class PersonalAccountService {
	PersonalAccountRepository personalAccountRepository;

	@Autowired
	PersonalAccountService(PersonalAccountRepository personalAccountRepository) {
		this.personalAccountRepository = personalAccountRepository;
	}

	public PersonalAccount newPersonal(PersonalAccount personalAccount) {
		return personalAccountRepository.save(personalAccount);
	}
}
