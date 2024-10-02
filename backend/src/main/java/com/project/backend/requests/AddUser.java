package com.project.backend.requests;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AddUser {
    private  String username;
    private  String password;
    private  String name;
    private  String email;
    private  String phone ;
}
