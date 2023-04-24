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
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date invoice_date;
	@Column
	private String item_name;
	@Column
	private double amount;
	@Column
	private String note;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "business_from", nullable = true)
	private BusinessAccount from;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "account_to", nullable = true)
	private Account to;
}
