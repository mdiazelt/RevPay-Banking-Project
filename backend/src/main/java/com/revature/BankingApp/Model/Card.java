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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private long number;
	@Column
	@JsonFormat(pattern="MM-yyyy")
	private Date expiration;
	@Column
	private short cvc;

	@ManyToOne(fetch = FetchType.EAGER)
	//@JoinColumn(name = "account", nullable = true)
	private Account account;
}
