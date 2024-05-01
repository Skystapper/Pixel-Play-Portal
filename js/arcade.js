// Array of card information
const cards = [
  {
    imgSrc: "Img/arcade-part/arcade-card/rdr2.jpg",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.",
      price:"$59.99",
      downSrc:"https://se7en.ws/files/7l_rdr2_setup.exe",
      category: "adventure"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/er.jpg",
    title: "Elden Ring",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",   
      price:"$75.99",
      downSrc:"http://surl.li/tiufu",
      category: "action"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/gta5.jpg",
    title: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",  
      price:"$29.99",
      downSrc:"https://files.modyolo.com/GTA%205/GTA5_v0.7_Beta.apk",
      category: "adventure"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      price:"$39.99",
      downSrc:"https://files.modyolo.com/NieR:%20Automata/NierM.b1.apk"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      price:"$26.95",
      downSrc:"http://surl.li/tiuqa"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      price:"FREE",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      price:"$39.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      price:"$26.95"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      price:"FREE"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      price:"$39.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      price:"$26.95"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      price:"FREE"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      price:"$39.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      price:"$26.95"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      price:"FREE"
  },
  
  // Add more card objects as needed
];



// Number of cards to load each time
const cardsPerPage = 6;
let currentIndex = 0;

// Function to dynamically create cards
function createCards() {
  const cardContainer = document.getElementById("cardContainer");

  // Display initial batch of cards
  displayNextBatch(cardContainer);

  // Add event listener to the "Load More" button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", function() {
    displayNextBatch(cardContainer);
  });

  // Add event listener to the search input field
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredCards = cards.filter(card => {
      return card.title.toLowerCase().includes(searchQuery);
    });
    displayFilteredCards(filteredCards, cardContainer);
  });
}

// Function to display the next batch of cards
function displayNextBatch(container) {
  // Calculate the end index for the next batch
  const endIndex = Math.min(currentIndex + cardsPerPage, cards.length);
  
  // Loop through the cards to display
  for (let i = currentIndex; i < endIndex; i++) {
    const card = cards[i];
    const cardHTML = `
      <div class="col-md-4">
        <div class="card arcade-card-one">
          <div class="img-part-main-arc">
            <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
          </div>
          <div class="card-body arcade-body-card">
            <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
            <p class="card-text arcade-b-card">${card.description}</p>
            <div class="button-card-part">
              <button type="button" class="btn text-uppercase btn-primary arcade-btn add-to-cart" data-index="${i}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View More</button>
              <p class="button-card-part-price">${card.price}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  }
  
  // Update current index
  currentIndex = endIndex;

  // Hide the "Load More" button if all cards are displayed
  if (currentIndex >= cards.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
  
  // Add event listeners to the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = button.dataset.index;
      openCustomModal(cards[index]);
    });
  });

  // Select all elements with the class ".arcade-b-card" after cards have been created
  let ca = document.querySelectorAll(".arcade-b-card");

  // Function to add "Read more/Read less" functionality to each card
  ca.forEach((card) => {
    let originalContent = card.innerHTML;

    let readless = () => {
      if (card.textContent.length > 125) {
        card.innerHTML =
          card.textContent.slice(0, 125) +
          "..." +
          '<span class="remaining-text" style="display: none;">' +
          "</span>" +
          '<span class="read-more"> Read more</span>';
      }
    };
    readless();

    let click_read = () => {
      card.addEventListener("click", function (event) {
        if (event.target.classList.contains("read-more")) {
          card.innerHTML =
            originalContent +
            '<span class="remaining-text" style="display: none;">' +
            "</span>" +
            '<span class="read-less"> Read less </span>';

          document
            .querySelector(".read-less")
            .addEventListener("click", function () {
              readless();
            });
        }
      });
    };
    click_read();
  });
}

// Function to display filtered cards
function displayFilteredCards(filteredCards, container) {
  // Clear existing cards
  container.innerHTML = "";
  
  // Display filtered cards
  filteredCards.forEach(card => {
    const cardHTML = `
      <div class="col-md-4">
        <div class="card arcade-card-one">
          <div class="img-part-main-arc">
            <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
          </div>
          <div class="card-body arcade-body-card">
            <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
            <p class="card-text arcade-b-card">${card.description}</p>
            <div class="button-card-part">
              <button type="button" class="btn text-uppercase btn-primary arcade-btn add-to-cart" data-index="${cards.indexOf(card)}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add to cart</button>
              <p class="button-card-part-price">${card.price}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Function to open the custom modal and display game details
function openCustomModal(game) {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("customModalContent");

  modalContent.innerHTML = `
    <span class="custom-close">&times;</span>
    <h2>${game.title}</h2>
    <img src="${game.imgSrc}" alt="${game.title}" style="max-width: 100%;">
    <p>${game.description}</p>
    <button type="button" class="btn text-uppercase btn-primary custom-download-btn"><a href="${game.downSrc}">Download</a></button>
  `;

  // Show modal
  modal.style.display = "block";

  // Close modal when clicking on the close button
  const closeButton = modal.querySelector(".custom-close");
  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content area
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Call the function to create cards when the page loads
window.onload = createCards;




//DROP DOWN MENU FOR CARATOGRIZE GAME 

// Add event listener to the category select dropdown
const categorySelect = document.getElementById("categorySelect");
categorySelect.addEventListener("change", function() {
  const selectedCategory = categorySelect.value;
  const searchQuery = searchInput.value.toLowerCase();
  let filteredCards = cards;

  if (selectedCategory !== "all") {
    filteredCards = filteredCards.filter(card => card.category === selectedCategory);
  }

  if (searchQuery) {
    filteredCards = filteredCards.filter(card => card.title.toLowerCase().includes(searchQuery));
  }

  displayFilteredCards(filteredCards, cardContainer);
});