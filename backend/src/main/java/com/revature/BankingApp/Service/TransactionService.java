package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;
import java.util.List;

@Service
@Transactional
public class TransactionService {
	TransactionRepository transactionRepository;
	AccountRepository<Account> accountRepository;

	@Autowired
	TransactionService(TransactionRepository transactionRepository, AccountRepository accountRepository) {
		this.transactionRepository = transactionRepository;
		this.accountRepository = accountRepository;
	}

	public Transaction send(Transaction transaction, long from, long to) {
		Account aFrom = accountRepository.findById(from).get(), aTo = accountRepository.findById(to).get();
		double balance = aFrom.getBalance(), amount = transaction.getAmount();
		if (balance - amount < 0)
			return null;
		aFrom.setBalance(balance - amount);
		aTo.setBalance(aTo.getBalance() + amount);
		transaction.setFrom(aFrom);
		transaction.setTo(aTo);
		return transactionRepository.save(transaction);
	}
	public List<Transaction> getTransactions(long id) {
		return transactionRepository.findByFromOrTo(id);
	}
}
