// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Creating event handlers
button.on("click", filterDate);
form.on("submit", filterDate);

// Adding filter by date function
function filterDate() {
  // Preventing refresh
  d3.event.preventDefault();
  // Retrieving date from input
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  // Filtering data
  filteredData = tableData.filter(
    (sighting) => sighting.datetime === inputValue
  );
  // Clearing table
  tbody.html("");
  // Iterating through data to add row to table body
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    // Iterating through each document to add td
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}