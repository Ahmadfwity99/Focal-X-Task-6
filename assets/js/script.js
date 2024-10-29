// Fetch books by Adam Mickiewicz in the "Liryka" category
fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(response => response.json())
    .then(books => displayFeaturedBooks(books));

// Select book card and popular books containers
let bookCard = document.querySelector(".books");
let popularBooks = document.querySelector(".books-1");

// Function to display featured and popular books
function displayFeaturedBooks(books) {
    console.log(books);

    // Display the first 4 featured books
    for (let index = 0; index < 4; index++) {
        bookCard.innerHTML += `
        <div class="book container-fluid flex-wrap text-center col-10 col-sm-6 col-md-4 col-lg-3">
            <div class="bg-body-secondary my-3">
                <img src="${books[index].simple_thumb}" class="img-fluid p-3 position-relative">
            </div>
            <h3 class="book-title">${books[index].title}</h3>
            <p class="author fs-6 text-secondary">${books[index].author}</p>
        </div>
        `;
    }

    // Display the next 8 popular books
    for (let index = 4; index < 12; index++) {
        popularBooks.innerHTML += `
        <div class="book container-fluid flex-wrap text-center col-10 col-sm-6 col-md-4 col-lg-3">
            <div class="bg-body-secondary my-3">
                <img src="${books[index].simple_thumb}" class="img-fluid p-3 position-relative">
            </div>
            <h3 class="book-title">${books[index].title}</h3>
            <p class="author fs-6 text-secondary">${books[index].author}</p>
        </div>
        `;
    }
}

// Fetch details of the book "Studnia i wahadło"
let best = document.querySelector(".best");
let bestBookImg = document.querySelector(".book-img");

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
    .then(response => response.json())
    .then(bestSelling => displayBestSellingBook(bestSelling));

// Function to display the best-selling book
function displayBestSellingBook(bestSelling) {
    console.log("=====================================================");
    console.log(bestSelling);
    console.log("=====================================================");

    // Display the best-selling book image
    bestBookImg.innerHTML = `
    <img src="${bestSelling.simple_thumb}" class="img-fluid p-3">
    `;

    // Display the details of the best-selling book
    best.innerHTML = `
    <p class="author py-2 fs-6 text-secondary">${bestSelling.authors.name}</p>
    <h3 class="text-dark py-2 fs-4">${bestSelling.title}</h3>
    <p class="py-2 fs-6 text-secondary">${bestSelling.fragment_data.html}</p>
    `;
}