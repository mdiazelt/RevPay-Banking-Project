package com.revature.BankingApp.Model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date request_time;

	@Column
	private double amount;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "account_from", nullable = true)
	private Account from;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "account_to", nullable = true)
	private Account to;
}
