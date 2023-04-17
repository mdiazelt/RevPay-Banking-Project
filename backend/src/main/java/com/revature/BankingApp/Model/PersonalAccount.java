package com.revature.BankingApp.Model;

import lombok.*;
import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "PERSONAL")
@Data
@EqualsAndHashCode
@AllArgsConstructor
//@NoArgsConstructor
public class PersonalAccount extends Account {
}
