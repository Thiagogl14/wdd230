const directoryURL = 'https://thiagogl14.github.io/wdd230/chamber/js/data.json';
fetch(directoryURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let directory = jsObject.businesses;
        for (const business in directory) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            card.appendChild(text);
            card.classList.add('directory-card');
            let cardContent = directory[business];

            let h3 = document.createElement('h3');
            h3.textContent = cardContent.name;
            h3.classList.add('card-title');
            text.appendChild(h3);

            let address = document.createElement('p');
            address.textContent = cardContent.address;
            address.classList.add('card-address');
            text.appendChild(address);

            let phone = document.createElement('p');
            phone.textContent = cardContent.phone;
            phone.classList.add('card-number');
            text.appendChild(phone);

            if (cardContent.website != "") {
                let website = document.createElement('p');
                website.innerHTML = `<a href="https://www.${cardContent.website}">${cardContent.website}</a>`;
                website.classList.add('card-site');
                text.appendChild(website);
            }

            if (cardContent.email != "") {
                let email = document.createElement('p');
                email.textContent = cardContent.email;
                text.appendChild(email);
                email.classList.add('card-email');
            }

            if (cardContent.logo != "") {
                let logo = document.createElement('img');
                logo.setAttribute('src', cardContent.logo);
                logo.setAttribute('alt', cardContent.name);
                logo.classList.add('card-img');
                logo.setAttribute('loading', 'lazy');
                card.appendChild(logo);
            }

            document.querySelector('.directory-grid').appendChild(card);
        }
    });