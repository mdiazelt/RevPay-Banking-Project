package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.PersonalAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalAccountRepository extends AccountRepository<PersonalAccount> {
}
