package com.project.backend.controller;

import com.project.backend.Seller;
import com.project.backend.User;
import com.project.backend.repository.SellerRepository;
import com.project.backend.requests.AddUser;
import com.project.backend.requests.Editprofile;
import com.project.backend.requests.LoginBodyParams;
import com.project.backend.requests.Message;
import com.project.backend.services.SellerServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/seller/")
@RequiredArgsConstructor
@CrossOrigin(value = "http://localhost:5173")
public class SellerController {
    private  final SellerServices sellerServices;
    @PostMapping("login")
    public ResponseEntity<?> SellerLogin(@RequestBody LoginBodyParams loginBodyParams){
        Seller user=sellerServices.getSellerByIdAndPassword(loginBodyParams.getUsername(),loginBodyParams.getPassword());
        if(user!=null)
        {
            Message message=new Message("ok");
            return  ResponseEntity.status(200).body(message);
        }
        else
        {
            Message message=new Message("not found");
            return ResponseEntity.ok().body(message);
        }
    }
    @PostMapping(path = "create")
    public ResponseEntity<?> CreateSellerAccount(@RequestBody AddUser user)
    {
        Message message=new Message(sellerServices.addUser(user.getUsername(),user.getPassword(),user.getName(),user.getPhone(),user.getEmail()));
        return ResponseEntity.status(200).body(message);
    }

    @PostMapping(path="edit-profile")
    public ResponseEntity<?> EditProfile(@RequestBody Editprofile info)
    {
        Message message = new Message(sellerServices.EditProfile(info));
        return ResponseEntity.status(200).body(message);
    }



}
