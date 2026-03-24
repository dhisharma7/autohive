package com.autohive.backend.service;

import com.autohive.backend.model.Dealer;
import com.autohive.backend.repository.DealerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DealerService {

    private final DealerRepository dealerRepository;

    public DealerService(DealerRepository dealerRepository) {
        this.dealerRepository = dealerRepository;
    }

    public List<Dealer> findAll() {
        return dealerRepository.findAll();
    }

    public Optional<Dealer> findById(Long id) {
        return dealerRepository.findById(id);
    }

    public Optional<Dealer> findBySlug(String slug) {
        return dealerRepository.findBySlug(slug);
    }
}
