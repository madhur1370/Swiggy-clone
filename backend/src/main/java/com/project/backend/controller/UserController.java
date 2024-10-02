package com.project.backend.controller;

import com.project.backend.User;
import com.project.backend.mongoCon.Restaurant;
import com.project.backend.repository.RestaurantRepository;
import com.project.backend.requests.AddUser;
import com.project.backend.requests.LoginBodyParams;
import com.project.backend.requests.Message;
import com.project.backend.services.UserServices;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user/")
@CrossOrigin(origins = "*")
@Data
public class UserController {

    private  final UserServices userServices;
    private final RestaurantRepository restaurantRespository;

    @PostMapping(path = "login")
    public ResponseEntity<Message> UserLogin(@RequestBody LoginBodyParams loginBodyParams){
        User user=userServices.getUserByIdAndPassword(loginBodyParams.getUsername(),loginBodyParams.getPassword());
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
    @GetMapping(path = "api/restaurants")
    public  ResponseEntity<?> AllRestaurants(@RequestParam String location) {
        List<Restaurant> res = restaurantRespository.findAllByLocation(location);
        if (res.isEmpty())
        {
            Message message=new Message("not found restaurants !!!!");
            return ResponseEntity.status(200).body(message);
        }
        else
            return ResponseEntity.status(200).body(res);
    }
    @PostMapping(path = "create-account")
    public ResponseEntity<?> createAccount(@RequestBody AddUser user)
    {
        Message message=new Message(userServices.addUser(user.getUsername(),user.getPassword(),user.getName(),user.getPhone(),user.getEmail()));
        return ResponseEntity.status(200).body(message);
    }

}

