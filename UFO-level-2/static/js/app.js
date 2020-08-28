// from data.js
var tableData = data;

// Mapping datapoints to new array
// Cities
var cities = ["- choose"];
tableData.map(function (sighting) {
  if (!cities.includes(sighting.city)) {
    cities.push(sighting.city);
  }
});
// Sorting by city
var citiesSort = cities;
citiesSort.sort();

// States
var states = ["- choose"];
tableData.map(function (sighting) {
  if (!states.includes(sighting.state)) {
    states.push(sighting.state);
  }
});
// Sorting by state
var statesSort = states;
statesSort.sort();

// Country
var countries = ["- choose"];
tableData.map(function (sighting) {
  if (!countries.includes(sighting.country)) {
    countries.push(sighting.country);
  }
});

// Shape
var shapes = ["- choose"];
tableData.map(function (sighting) {
  if (!shapes.includes(sighting.shape)) {
    shapes.push(sighting.shape);
  }
});

// Sorting shapes
var shapesSort = shapes;
shapesSort.sort();

// console.log(cities);
// console.log(states);
// console.log(countries);

// Retrieving necessary HTML elements
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");
var citySelect = d3.select("#city-select"); // add "option" elements here
var stateSelect = d3.select("#state-select");
var countrySelect = d3.select("#country-select");
var shapeSelect = d3.select("#shape-select");

// Creating event handlers
button.on("click", filterDate);
form.on("submit", filterDate);

// Adding city list to html
citiesSort.forEach((city) => {
  // console.log(city);
  var newCity = citySelect.append("option");
  newCity.text(city);
});

// Adding states to html
statesSort.forEach((state) => {
  var newState = stateSelect.append("option");
  newState.text(state);
});

// Adding Countries to html
countries.forEach((country) => {
  var newCountry = countrySelect.append("option");
  newCountry.text(country);
});

// Adding shapes to html
shapesSort.forEach((shape) => {
  var newShape = shapeSelect.append("option");
  newShape.text(shape);
});

// Adding function to filter by date
function filterDate() {
  // Preventing refresh
  d3.event.preventDefault();

  // Retrieving selected city, state, country, shape
  var selectedCity = citySelect.property("value");
  var selectedState = stateSelect.property("value");
  var selectedCountry = countrySelect.property("value");
  var selectedShape = shapeSelect.property("value");

  // Retrieving date from input
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");

  console.log(selectedCity);
  console.log(selectedState);
  console.log(selectedCountry);
  console.log(inputValue);

  if (inputValue !== "") {
    // console.log("date is blank");
    // Filtering data based on selections
    filteredData = tableData.filter(
      (sighting) => sighting.datetime === inputValue
    );
  }

  // Calling function to populate table
  populateTable(filteredData);
}

function populateTable(filteredData) {
  // Clearing table
  tbody.html("");
  // Iterating through data to add row to table body
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    // Iterating through each document and add td
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
