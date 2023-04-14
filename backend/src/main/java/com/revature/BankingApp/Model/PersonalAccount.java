package com.revature.Model;

import lombok.*;

@Entity
@DiscriminatorValue(value = "PERSONAL")
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class PersonalAccount extends Account {
}
