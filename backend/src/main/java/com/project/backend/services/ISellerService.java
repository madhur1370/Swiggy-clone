package com.project.backend.services;

import com.project.backend.Seller;
import com.project.backend.requests.Editprofile;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ISellerService{
    Seller getSellerByIdAndPassword(String name,String password);
    String addUser(String username, String password, String name, String phone, String email);
    String EditProfile(Editprofile info);
}
