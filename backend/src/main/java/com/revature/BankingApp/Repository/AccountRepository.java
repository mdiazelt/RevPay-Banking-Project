package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AccountRepository<T extends Account> extends JpaRepository<T, Long> {
    T findByUsernameAndPasswd(String username, String passwd);
    T findByUsername(String username);
    List<T> findAllByEmail(String email);
    List<T> findAllByPhone(String phone);
}
