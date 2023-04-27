package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findAllByAccountId(long id);
}
