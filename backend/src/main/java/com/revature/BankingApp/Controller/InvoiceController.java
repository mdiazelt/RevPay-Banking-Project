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
public class InvoiceController {
	InvoiceService invoiceService;

	@Autowired
	public InvoiceController(InvoiceService invoiceService) {
		this.invoiceService = invoiceService;
	}

	@PostMapping(value = "invoice", params = {"from", "to"})
	public Invoice login(@RequestBody Invoice invoice, @RequestParam("from") long from, @RequestParam("to") long to) {
		return invoiceService.send(invoice, from, to);
	}

	@GetMapping("invoices/{id}")
	public List<Invoice> getInvoices(@PathVariable long id) {
		return invoiceService.getInvoices(id);
	}
}
