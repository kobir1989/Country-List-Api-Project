// function allCountry() {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((data) => {
//         const recevedData = data;
//         console.log(recevedData);
//       })
//       .catch("something went wrong");
//   }
//   allCountry();
///////////////////////////////////////////////////////////////////////

const displayElement = document.querySelector(".API-data");

//creating html dom elements

const allCountryData = function () {
  fetch("https://restcountries.com/v3.1/all")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const recevedData = data;
      recevedData.forEach((element) => {
        const finalData = element;
        //  return finalData;
        console.log(finalData.name.common);
        const html = `
        <div class="nthChild data-row row">
        <div class="col"><img class= "flag-image" src="${
          finalData.flags.png
        }" alt = "flag.png"></div>
        <div class="col">${finalData.name.common}</div>
        <div class="col">${finalData.region}</div>
        <div class="col">${finalData.capital}</div>
        <div class="col">${(+finalData.population / 1000000).toFixed(
          1
        )} Million</div>
         </div>
        `;
        displayElement.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch("something went wrong");
};

allCountryData();

// Display in dom
