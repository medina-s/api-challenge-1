const baseUrl = 'https://api.covid19api.com/country/'
const dataCovid = document.querySelector(".dataCovid")
const search = document.querySelector(".search");
const submitBtn = document.querySelector(".submit-btn")
const date = document.querySelector(".date")
const mainDiv = document.querySelector(".result")
let dataNeedToShow;

submitBtn.addEventListener('click', fetchResults);

function fetchResults(e){
e.preventDefault();
let country = search.value.toString();
    if (index=0) => {}
// let startDate = date.value;
// console.log(startDate)
// let url = baseUrl + country + '/status/confirmed' //?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
    // https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
    // let startDate = startDateButton.value
// let url = baseUrl + country + '/status/confirmed?from=' + startDate + 'T00:00:00Z&to=' + startDate + 'T00:00:00Z';
let url = baseUrl + country + '/status/confirmed/live'

fetch(url)
    .then(function(result) {
    console.log(result)
    return result.json();
}) .then (function(json) {
    console.log (json)
    displayCountryData(json, country)
}) .catch (function(err) {
    console.log('you need to enter the Country name', err)
});
}
// fetchResults()


function displayCountryData(json, country) {
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
}
    let liveCount = json.pop()
    console.log(liveCount.Cases)
    // for (i=0; i<1; i++){
        let dataEntry = document.createElement('p');
        dataEntry.innerText = `Total confirmed cases in ${country} : ${liveCount.Cases}`
        mainDiv.appendChild(dataEntry)
        // document.appendChild(dataEntry);
    // }
};
// displayCountryData()


