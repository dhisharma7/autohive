package com.autohive.backend.controller;

import com.autohive.backend.model.Car;
import com.autohive.backend.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/cars")
    public List<Car> getAllCars() {
        return carService.findAll();
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        return carService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/cars/slug/{slug}")
    public ResponseEntity<Car> getCarBySlug(@PathVariable String slug) {
        return carService.findBySlug(slug)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/dealers/{dealerId}/cars")
    public List<Car> getCarsByDealer(@PathVariable Long dealerId) {
        return carService.findByDealerId(dealerId);
    }
}
