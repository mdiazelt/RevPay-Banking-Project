package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
