package com.autohive.backend.controller;

import com.autohive.backend.model.Dealer;
import com.autohive.backend.service.DealerService;
import org.springframework.web.bind.annotation.GetMapping;
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
}
