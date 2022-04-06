const templeURL = 'https://thiagogl14.github.io/wdd230/temple/data/temples.json';
fetch(templeURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let information = jsObject.temples;
        for (const temple in information) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            card.appendChild(text);
            card.classList.add('temple-card');
            let cardContent = information[temple];

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

            let services = document.createElement('p');
            services.textContent = cardContent.services;
            services.classList.add('card-services');
            text.appendChild(services);

            let email = document.createElement('p');
            email.textContent = cardContent.email;
            email.classList.add('card-email');
            text.appendChild(email);

            let history = document.createElement('p');
            history.textContent = cardContent.history;
            history.classList.add('card-history');
            text.appendChild(history);

            let schedule = document.createElement('p');
            schedule.textContent = cardContent.schedule;
            schedule.classList.add('card-schedule');
            text.appendChild(schedule);

            let closure = document.createElement('p');
            closure.textContent = cardContent.closure;
            closure.classList.add('card-closure');
            text.appendChild(closure);

            let button = document.createElement('a');
            button.textContent = cardContent.button;
            button.classList.add('panel-group_btn');
            button.classList.add('like-btn');
            button.setAttribute('id', 'like')
            button.setAttribute('href', '#')
            text.appendChild(button);

            if (cardContent.logo != "") {
                let logo = document.createElement('img');
                logo.setAttribute('src', cardContent.logo);
                logo.setAttribute('alt', cardContent.name);
                logo.classList.add('card-img');
                logo.setAttribute('loading', 'lazy');
                card.appendChild(logo);
            }

            document.querySelector('.temple').appendChild(card);
        }
    });