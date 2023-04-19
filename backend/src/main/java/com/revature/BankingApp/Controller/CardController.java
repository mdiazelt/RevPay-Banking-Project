package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"}, allowCredentials = "true")
public class CardController {
	CardService cardService;

	@Autowired
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}
}
