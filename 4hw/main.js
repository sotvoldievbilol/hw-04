document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('container');

  fetch("https://63d304794abff88834170d21.mockapi.io/ss")
      .then(response => response.json())
      .then((data) => {
          console.log(data);
          container.innerHTML = '';
          data.forEach(function (item) {
              const itemDiv = document.createElement('div');
              itemDiv.innerHTML = `<h1>${item.name}</h1>` +
                  `<p>${item.age}</p>` +
                  `<img src="${item.avatar}" alt="${item.name}"/>`;
              container.appendChild(itemDiv);

              itemDiv.addEventListener('click', function () {
                  container.innerHTML = '';

                  const clickedItemDiv = document.createElement('div');
                  clickedItemDiv.innerHTML = `<h1>${item.name}</h1>` +
                      `<p>${item.age}</p> ` +
                      `<img src="${item.avatar}" alt="${item.name}"/>
                      <button onclick="goBack()">Back</button>`;
                  container.appendChild(clickedItemDiv);

                  console.log('Clicked on', item.id);
              });
          });
      })
      .catch(error => console.log(error));

  window.goBack = function () {
      fetch("https://63d304794abff88834170d21.mockapi.io/ss")
          .then(response => response.json())
          .then((data) => {
              container.innerHTML = '';
              data.forEach(function (item) {
                  const itemDiv = document.createElement('div');
                  itemDiv.innerHTML = `<h1>${item.name}</h1>` +
                     ` <p>${item.age}</p>` +
                      `<img src="${item.avatar}" alt="${item.name}" />`;
                  container.appendChild(itemDiv);

                  itemDiv.addEventListener('click', function () {
                      container.innerHTML = '';

                      const clickedItemDiv = document.createElement('div');
                      clickedItemDiv.innerHTML = `<h1>${item.name}</h1>` +
                          `<p>${item.age}</p>` +
                          `<img src="${item.avatar}" alt="${item.name}"/>
                          <button onclick="goBack()">Back</button>`;
                      container.appendChild(clickedItemDiv);

                      console.log('Clicked on', item.id);
                  });
              });
          })
          .catch(error => console.log(error));
  };
});