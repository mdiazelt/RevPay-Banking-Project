package com.revature.BankingApp.Model;

import lombok.*;
import jakarta.persistence.*;
import java.util.Date;
import com.fasterxml.jackson.annotation.*;

@Entity
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date transaction_time;

	@Column
	private double amount;

	@ManyToOne(fetch = FetchType.EAGER)
	@JsonManagedReference(value = "transactions")
	//@JoinColumn(name = "transactions", nullable = true)
	private Account from;
	@ManyToOne(fetch = FetchType.EAGER)
	@JsonManagedReference(value = "transactions")
	//@JoinColumn(name = "transactions", nullable = true)
	private Account to;
}
