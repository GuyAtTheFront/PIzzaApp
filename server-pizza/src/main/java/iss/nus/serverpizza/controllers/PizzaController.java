package iss.nus.serverpizza.controllers;

import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import iss.nus.serverpizza.services.PizzaService;

@RestController
@RequestMapping(path="/api/pizza", produces=MediaType.APPLICATION_JSON_VALUE)
public class PizzaController {
    
    @Autowired
    PizzaService pizzaService;

    @PostMapping(path="", consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postForm(@RequestBody String json) {

        String payload = pizzaService.postForm(json);

        return ResponseEntity.ok(payload);
    }

}
