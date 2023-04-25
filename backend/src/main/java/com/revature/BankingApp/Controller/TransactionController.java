package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@RestController
@CrossOrigin("*")
public class TransactionController {
	TransactionService transactionService;

	@Autowired
	public TransactionController(TransactionService transactionService) {
		this.transactionService = transactionService;
	}

	@PostMapping(value = "send", params = {"from", "to"})
	public Transaction login(@RequestBody Transaction transaction, @RequestParam("from") long from, @RequestParam("to") long to) {
		return transactionService.send(transaction, from, to);
	}

	@GetMapping("transactions/{id}")
	public List<Transaction> getTransactions(@PathVariable long id) {
		return transactionService.getTransactions(id);
	}
}
