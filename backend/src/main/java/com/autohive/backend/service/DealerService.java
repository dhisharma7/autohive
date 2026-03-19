package com.autohive.backend.service;

import com.autohive.backend.model.Dealer;
import com.autohive.backend.repository.DealerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DealerService {

    private final DealerRepository dealerRepository;

    public DealerService(DealerRepository dealerRepository) {
        this.dealerRepository = dealerRepository;
    }

    public List<Dealer> findAll() {
        return dealerRepository.findAll();
    }
}
