package com.project.backend.repository;

import com.project.backend.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "SELECT * FROM user WHERE username = :username AND password = :password",nativeQuery = true)
    Optional<User> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);


    @Query(value = "SELECT * FROM user WHERE username=:username OR phone=:phone OR email=:email LIMIT 1",nativeQuery = true)
    User findByUsernameOrPhoneOrEmail(@Param("username") String username,@Param("phone") String phone,@Param("email") String email);
}
