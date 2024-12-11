package com.project.backend.mongoCon;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
    private  String dish_name;
    private  Integer price;
    private  List<Integer> rating;
    private  String image;
}
