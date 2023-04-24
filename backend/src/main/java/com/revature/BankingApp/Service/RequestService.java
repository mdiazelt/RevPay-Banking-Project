package com.revature.BankingApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.revature.BankingApp.Repository.*;
import com.revature.BankingApp.Model.*;
import java.util.List;

@Service
@Transactional
public class RequestService {
	RequestRepository requestRepository;
	AccountRepository<Account> accountRepository;

	@Autowired
	RequestService(RequestRepository requestRepository, AccountRepository accountRepository) {
		this.requestRepository = requestRepository;
		this.accountRepository = accountRepository;
	}

	public Request request(Request request, long from, long to) {
		Account aFrom = accountRepository.findById(from).get(), aTo = accountRepository.findById(to).get();
		request.setFrom(aFrom);
		request.setTo(aTo);
		return requestRepository.save(request);
	}
	public List<Request> getRequests(long id) {
		return requestRepository.findByFromOrTo(id);
	}
}
