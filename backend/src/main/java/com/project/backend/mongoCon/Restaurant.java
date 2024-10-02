package com.project.backend.mongoCon;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="restaurant")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {
    private String id;
    private String location;
    private List<Hotels> restaurants;
}

