package com.revature.BankingApp.Model;

import lombok.*;
import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "BUSINESS")
@Data
@EqualsAndHashCode
@AllArgsConstructor
//@NoArgsConstructor
public class BusinessAccount extends Account {
}
