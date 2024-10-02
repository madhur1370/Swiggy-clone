package com.project.backend.mongoCon;

import com.project.backend.mongoCon.Menu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotels {
    private String res_id;
    private String res_name;
    private Integer avg_rating;
    private List<Integer> ratings;
    private String address;
    private Integer pincode;
    private List<Menu> menu;
    private List<String> res_image;
    private String about;
    private String user_name;
    private String phone;
    private String email;
    private String owner_name;

}
