package iss.nus.serverpizza.services;

import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import iss.nus.serverpizza.repositories.PizzaRepository;

@Service
public class PizzaService {

    @Autowired
    PizzaRepository pizzaRepo;
    
    public String postForm(String json) {
        Document doc = Document.parse(json);
        doc.append("id", UUID.randomUUID().toString().subSequence(0, 8));
        pizzaRepo.insertForm(doc);
        return doc.toJson();
    }


}
