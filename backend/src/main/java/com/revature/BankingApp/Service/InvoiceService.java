package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;
import java.util.List;

@Service
@Transactional
public class InvoiceService {
	InvoiceRepository invoiceRepository;
	AccountRepository<Account> accountRepository;
	BusinessAccountRepository businessAccountRepository;

	@Autowired
	InvoiceService(InvoiceRepository invoiceRepository, AccountRepository accountRepository,
			BusinessAccountRepository businessAccountRepository) {
		this.invoiceRepository = invoiceRepository;
		this.accountRepository = accountRepository;
		this.businessAccountRepository = businessAccountRepository;
	}

	public Invoice send(Invoice invoice, long from, long to) {
		BusinessAccount aFrom = businessAccountRepository.findById(from).get();
		Account aTo = accountRepository.findById(to).get();
		invoice.setFrom(aFrom);
		invoice.setTo(aTo);
		return invoiceRepository.save(invoice);
	}
	public List<Invoice> getInvoices(long id) {
		return invoiceRepository.findByFromOrTo(id);
	}
}
