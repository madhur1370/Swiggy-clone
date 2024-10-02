package com.project.backend.repository;

import com.project.backend.Seller;
import com.project.backend.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface SellerRepository extends JpaRepository<Seller,String> {
    @Query(value = "select * from seller where username=:username and password=:password",nativeQuery = true)
    Optional<Seller> findByUsernameAndPassword(@Param("username") String name,@Param("password") String password);

    @Query(value = "SELECT * FROM seller WHERE username=:username OR phone=:phone OR email=:email LIMIT 1" , nativeQuery = true)
    Seller findByUsernameOrPhoneOrEmail(String username, String phone, String email);

    @Query(value = "SELECT * FROM seller WHERE username=:username",nativeQuery = true)
    Seller findByUsername(String username);
}
