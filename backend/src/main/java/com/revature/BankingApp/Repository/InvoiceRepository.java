package com.revature.BankingApp.Repository;

import com.revature.BankingApp.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    @Query(value = "SELECT * FROM \"invoice\" WHERE \"account_from\" = :id OR \"account_to\" = :id", nativeQuery = true)
    List<Invoice> findByFromOrTo(@Param("id") long id);
}
