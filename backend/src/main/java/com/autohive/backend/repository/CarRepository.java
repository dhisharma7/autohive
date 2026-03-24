package com.autohive.backend.repository;

import com.autohive.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    Optional<Car> findBySlug(String slug);
    List<Car> findByDealerId(Long dealerId);
}
