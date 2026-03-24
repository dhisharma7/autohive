package com.autohive.backend.service;

import com.autohive.backend.model.Car;
import com.autohive.backend.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> findAll() {
        return carRepository.findAll();
    }

    public Optional<Car> findById(Long id) {
        return carRepository.findById(id);
    }

    public Optional<Car> findBySlug(String slug) {
        return carRepository.findBySlug(slug);
    }

    public List<Car> findByDealerId(Long dealerId) {
        return carRepository.findByDealerId(dealerId);
    }
}
