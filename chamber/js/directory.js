window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sList").onclick = () => {
      document.getElementById("lgDemo").classList.remove("grid");
    };
    document.getElementById("sGrid").onclick = () => {
      document.getElementById("lgDemo").classList.add("grid");
    };
  });



  const requestURL = 'giovannibonfim.github.io/wdd230/main/chamber/data.json';
  const items = document.querySelector('#lgDemo');
  
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const business = jsonObject['business'];
      prophets.forEach(displayBusiness);
    });

    function displayBusiness(business) {
        // Create elements to add to the document
            let item = document.createElement('section');
            let h2 = document.createElement('h2');
            let adress = document.createElement('p');
            let phone = document.createElement('p');
            let logo = document.createElement('img');
          
            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = `${business.name}`;
            adress.textContent = `${business.adress}`;
            phone.textContent = `${business.phone}`;
          
            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            logo.setAttribute('src', business.logo);
            logo.setAttribute('alt', `${business.name}`);
            logo.setAttribute('loading', 'lazy');
          
            // Add/append the section(card) with the h2 element
            card.appendChild(h2);
            card.appendChild(adress);
            card.appendChild(phone);
            card.appendChild(logo);
          
            // Add/append the existing HTML div with the cards class with the section(card)
            
            items.appendChild(item);
        }