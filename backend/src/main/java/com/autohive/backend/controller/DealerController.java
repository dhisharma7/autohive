package com.autohive.backend.controller;

import com.autohive.backend.model.Dealer;
import com.autohive.backend.service.DealerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DealerController {

    private final DealerService dealerService;

    public DealerController(DealerService dealerService) {
        this.dealerService = dealerService;
    }

    @GetMapping("/dealers")
    public List<Dealer> getAllDealers() {
        return dealerService.findAll();
    }

    @GetMapping("/dealers/{id}")
    public ResponseEntity<Dealer> getDealerById(@PathVariable Long id) {
        return dealerService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/dealers/slug/{slug}")
    public ResponseEntity<Dealer> getDealerBySlug(@PathVariable String slug) {
        return dealerService.findBySlug(slug)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
