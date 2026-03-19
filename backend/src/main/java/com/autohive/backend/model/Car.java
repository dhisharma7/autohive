package com.autohive.backend.model;

import java.util.List;

public class Car {
    private Long id;
    private String title;
    private String slug;
    private int price;
    private int year;
    private String make;
    private String model;
    private int mileage;
    private String fuel;
    private String transmission;
    private String bodyType;
    private String color;
    private String engine;
    private int horsepower;
    private String image;
    private List<String> gallery;
    private List<String> features;
    private String description;
    private Long dealerId;

    public Car() {}

    public Car(Long id, String title, String slug, int price, int year, String make, String model,
               int mileage, String fuel, String transmission, String bodyType, String color,
               String engine, int horsepower, String image, List<String> gallery,
               List<String> features, String description, Long dealerId) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.price = price;
        this.year = year;
        this.make = make;
        this.model = model;
        this.mileage = mileage;
        this.fuel = fuel;
        this.transmission = transmission;
        this.bodyType = bodyType;
        this.color = color;
        this.engine = engine;
        this.horsepower = horsepower;
        this.image = image;
        this.gallery = gallery;
        this.features = features;
        this.description = description;
        this.dealerId = dealerId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public String getMake() { return make; }
    public void setMake(String make) { this.make = make; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public int getMileage() { return mileage; }
    public void setMileage(int mileage) { this.mileage = mileage; }

    public String getFuel() { return fuel; }
    public void setFuel(String fuel) { this.fuel = fuel; }

    public String getTransmission() { return transmission; }
    public void setTransmission(String transmission) { this.transmission = transmission; }

    public String getBodyType() { return bodyType; }
    public void setBodyType(String bodyType) { this.bodyType = bodyType; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public String getEngine() { return engine; }
    public void setEngine(String engine) { this.engine = engine; }

    public int getHorsepower() { return horsepower; }
    public void setHorsepower(int horsepower) { this.horsepower = horsepower; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public List<String> getGallery() { return gallery; }
    public void setGallery(List<String> gallery) { this.gallery = gallery; }

    public List<String> getFeatures() { return features; }
    public void setFeatures(List<String> features) { this.features = features; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getDealerId() { return dealerId; }
    public void setDealerId(Long dealerId) { this.dealerId = dealerId; }
}
