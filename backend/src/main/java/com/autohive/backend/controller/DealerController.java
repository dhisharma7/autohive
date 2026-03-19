package com.autohive.backend.controller;

import com.autohive.backend.data.MockData;
import com.autohive.backend.model.Dealer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DealerController {

    @GetMapping("/dealers")
    public List<Dealer> getAllDealers() {
        return MockData.DEALERS;
    }
}
