package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;

@Service
@Transactional
public class TransactionService {
	TransactionRepository transactionRepository;

	@Autowired
	TransactionService(TransactionRepository transactionRepository) {
		this.transactionRepository = transactionRepository;
	}
}
