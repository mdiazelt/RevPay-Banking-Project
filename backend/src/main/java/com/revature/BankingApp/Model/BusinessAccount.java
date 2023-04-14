package com.revature.Model;

import lombok.*;

@Entity
@DiscriminatorValue(value = "BUSINESS")
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class BusinessAccount extends Account {
}
