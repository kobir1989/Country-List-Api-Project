const renderData = function (data) {
  const html = `
        <div class="nthChild data-row row">
        <div class="col"><a class="link" href = "${
          data.maps.googleMaps
        }" target="_blank"> 
          <img class= "flag-image" src="${
            data.flags.png
          }" alt = "flag.png"></a></div>
        <div class="col">${data.name.common}</div>
        <div class="col">${data.region}</div>
        <div class="col">${data.capital}</div>
        <div class="col">${(+data.population / 1000000).toFixed(
          1
        )} Million</div>
         </div>
        `;
  displayElement.insertAdjacentHTML("beforeend", html);
};
