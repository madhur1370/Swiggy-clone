package com.project.backend.repository;

import com.project.backend.mongoCon.Hotels;
import com.project.backend.mongoCon.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    @Query(value = "{'location':?0}")
    List<Restaurant> findAllByLocation(String location);
}
