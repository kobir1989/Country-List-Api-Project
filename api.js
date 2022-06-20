const displayElement = document.querySelector(".API-data");
const page2Element = document.querySelector(".country--details");
const searchInput = document.querySelector("#search--input");

////////////////////////////////////////////////////////////////
//getting data and display in UI
const getData = async function () {
  try {
    const apiResponse = await fetch("https://restcountries.com/v3.1/all");
    const response = await apiResponse.json();

    const data = await response.forEach((data) => {
      renderData(data);
    });
  } catch (e) {
    showAlert(e);
  }
};
getData();

// live search

searchInput.addEventListener("keydown", (e) => {
  const userInput = e.target.value.toLowerCase();
  document.querySelectorAll(".row").forEach((task) => {
    const row = task.textContent;

    if (row.toLowerCase().indexOf(userInput) != -1) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
});
