package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository<T extends Account> extends JpaRepository<T, Long> {
    T findByUsernameAndPasswd(String username, String passwd);
}
