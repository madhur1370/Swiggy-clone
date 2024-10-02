package com.project.backend.services;


import com.project.backend.Seller;
import com.project.backend.repository.SellerRepository;
import com.project.backend.requests.Editprofile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SellerServices implements  ISellerService{

    private final SellerRepository sellerRepository;

    @Override
    public  Seller getSellerByIdAndPassword(String name, String password) {
        return sellerRepository.findByUsernameAndPassword(name,password).orElse(null);
    }

    @Override
    public String addUser(String username, String password, String name, String phone, String email)
    {
        Seller user=sellerRepository.findByUsernameOrPhoneOrEmail(username,phone,email);
        if(user==null)
        {
            sellerRepository.save(new Seller(username,name,password,email,phone));
            return "ok";
        }
        return "user already exists!!";
    }
    @Override
    public String EditProfile(Editprofile info) {
        Optional.ofNullable(sellerRepository.findByUsername(info.getUsername())).ifPresent((seller)->{
            seller.setAddress(info.getAddress());
            seller.setEmail(info.getEmail());
            seller.setRestaurantName(info.getRes_name());
            seller.setPhone(info.getPhone());
            seller.setName(info.getName());
        });
        return "edited the profile!!";
    }
}
