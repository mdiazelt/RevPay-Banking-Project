package com.revature.BankingApp.Model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "ACCOUNT_TYPE", discriminatorType = DiscriminatorType.STRING)
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Long id;
	@Column(unique = true)
	protected String username;
	@Column
	protected String passwd;
	@Column
	protected double balance;
	@Column
	protected String email;
	@Column
	protected String phone;
	@Column
	protected String role;
	/*
	@Column
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	protected long sessionToken = -1;
	*/
	@OneToMany(fetch = FetchType.EAGER)
	//@JsonBackReference(value = "transactions")
	private List<Transaction> transactions;
	@OneToMany(fetch = FetchType.EAGER)
	private List<Card> cards;
	@OneToMany(fetch = FetchType.EAGER)
	private List<Loan> loans;

	public boolean updateBalance(double amount) {
		boolean p = amount > 0 || balance + amount >= 0;
		balance += p ? amount : 0;
		return p;
	}
}
