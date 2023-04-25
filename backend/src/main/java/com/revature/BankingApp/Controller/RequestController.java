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
public class RequestController {
	RequestService requestService;

	@Autowired
	public RequestController(RequestService requestService) {
		this.requestService = requestService;
	}

	@PostMapping(value = "request", params = {"from", "to"})
	public Request request(@RequestBody Request request, @RequestParam("from") long from, @RequestParam("to") long to) {
		return requestService.request(request, from, to);
	}

	@GetMapping("requests/{id}")
	public List<Request> getRequests(@PathVariable long id) {
		return requestService.getRequests(id);
	}
}
