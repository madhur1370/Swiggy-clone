package com.project.backend.requests;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Editprofile {
    private String username;
    private String name;
    private String phone;
    private String res_name;
    private String address;
    private String email;
    private String  location;
}
