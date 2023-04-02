package iss.nus.serverpizza.repositories;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PizzaRepository {
    
    @Autowired
    MongoTemplate mongoTemplate;
    
    public void insertForm(Document doc) {
        Document inserted = mongoTemplate.insert(doc, "orders");
        System.out.println(inserted.toJson());
        //TODO: Handle Error oi
        return;
    }

}
