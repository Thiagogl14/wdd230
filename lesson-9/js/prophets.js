const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    displayProphets(prophets);
    
  });

  function displayProphets (prophets) {
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let image = document.createElement("img");
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', 'Portrait of ' + prophets[i].name + ' ' + prophets[i].lastname +' - ' + prophets[i].order + ' Latter-day President');
        image.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    
    }
  }