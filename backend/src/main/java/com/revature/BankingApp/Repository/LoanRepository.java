package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
