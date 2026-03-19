package com.autohive.backend.model;

public class Dealer {
    private Long id;
    private String name;
    private String slug;
    private String logo;
    private String image;
    private String phone;
    private String email;
    private String address;
    private String website;
    private double rating;
    private int totalListings;
    private String description;
    private String openHours;

    public Dealer() {}

    public Dealer(Long id, String name, String slug, String logo, String image,
                  String phone, String email, String address, String website,
                  double rating, int totalListings, String description, String openHours) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.logo = logo;
        this.image = image;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.website = website;
        this.rating = rating;
        this.totalListings = totalListings;
        this.description = description;
        this.openHours = openHours;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getLogo() { return logo; }
    public void setLogo(String logo) { this.logo = logo; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getTotalListings() { return totalListings; }
    public void setTotalListings(int totalListings) { this.totalListings = totalListings; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getOpenHours() { return openHours; }
    public void setOpenHours(String openHours) { this.openHours = openHours; }
}
