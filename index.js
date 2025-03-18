const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "images/gyukotsu.jpg", rating: 5, comment: "Rich and hearty!" }
];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const ramenImg = document.createElement("img");
        ramenImg.src = ramen.image;
        ramenImg.alt = ramen.name;
        ramenImg.classList.add("ramen-image", "img-fluid", "rounded");


        ramenImg.addEventListener("click", () => handleClick(ramen));

        ramenMenu.appendChild(ramenImg);
    });
}


function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-restaurant").value = ramen.restaurant;
    document.getElementById("ramen-rating").value = ramen.rating;
    document.getElementById("ramen-comments").value = ramen.comment || "";
}


function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("new-name").value;
        const restaurant = document.getElementById("new-restaurant").value;
        const rating = parseInt(document.getElementById("new-rating").value);
        const comment = document.getElementById("new-comment").value;
        const imageFile = document.getElementById("new-image").files[0];

        if (!name || !restaurant || !rating || !imageFile) {
            alert("Please fill in all the fields!");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const newRamen = {
                id: ramens.length + 1,
                name,
                restaurant,
                rating,
                comment,
                image: e.target.result
            };

            ramens.push(newRamen);
            displayRamens();
            form.reset();
        };

        reader.readAsDataURL(imageFile);
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
