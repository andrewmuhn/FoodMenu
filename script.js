let menu = {
    drinks: [
        "Water",
        "Tea",
        "Sweet Tea",
        "Coke",
        "Dr. Pepper",
        "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Veggies",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake",
        "Chocolate Cake",
        "Snickerdoodle Cookie"
    ]
};

window.onload = function() {
    let drinks = document.getElementById("drinks");
    let entrees = document.getElementById("entrees");
    let desserts = document.getElementById("desserts");

    for (let i = 0; i < menu.drinks.length; i++) {
        let option = document.createElement("option");
        option.text = menu.drinks[i];
        drinks.add(option);
    }

    for (let i = 0; i < menu.entrees.length; i++) {
        let option = document.createElement("option");
        option.text = menu.entrees[i];
        entrees.add(option);
    }

    for (let i = 0; i < menu.desserts.length; i++) {
        let option = document.createElement("option");
        option.text = menu.desserts[i];
        desserts.add(option);
    }
};