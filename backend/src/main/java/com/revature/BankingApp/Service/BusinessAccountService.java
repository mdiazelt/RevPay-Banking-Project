package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;

@Service
@Transactional
public class BusinessAccountService {
	BusinessAccountRepository businessAccountRepository;

	@Autowired
	BusinessAccountService(BusinessAccountRepository businessAccountRepository) {
		this.businessAccountRepository = businessAccountRepository;
	}
}
