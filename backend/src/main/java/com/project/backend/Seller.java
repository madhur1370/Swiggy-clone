package com.project.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Seller {
    @Id
    private String username;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String address;
    private String restaurantName;


    public Seller(String username, String name, String password, String email, String phone) {
        this.username=username;
        this.name=name;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.address="";
        this.restaurantName="";
    }
}
