package com.revature.BankingApp.Controller;

import com.revature.BankingApp.Model.*;
import com.revature.BankingApp.Service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin("*")
public class CardController {
	CardService cardService;

	@Autowired
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}

	@PostMapping("addCard/{id}")
	public Card newPersonal(@RequestBody Card card, @PathVariable long id) {
		return this.cardService.addCard(card, id);
	}

	@GetMapping("cards/{id}")
	public List<Card> listCards(@PathVariable long id) {
		return this.cardService.listCards(id);
	}
}
