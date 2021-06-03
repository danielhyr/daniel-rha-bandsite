
// 

const SHOWS_URL = "https://project-1-api.herokuapp.com/showdates"
const API_KEY = "47bba9b7-d7ec-48dc-a68a-93ec482f02de";



// Select the empty .shows-one container

let shows = document.querySelector(".shows-one")

// Create a function to make individual elements


const makeElement = (elementName, className) => {
    let varName =  document.createElement(elementName)
    varName.classList.add(className)
    return varName
  }

// Create the first element, h2 title, in the page

let showsTitle = makeElement("h2", "shows__title")
  showsTitle.innerText = "Shows"
  shows.append(showsTitle)


// Created innerLi, a function that creates one part of a ticket based on 4 paramters of: html content, a string name if applicale, and two values from objects inside the main array


function createLi (innerText, stringName, arrayClassValue, arrayInnerText) {

        let innerLi = makeElement("li", "shows-tickets-list")

            let innerP1 =  makeElement("p", "shows-tickets-list__silver")
            innerP1.classList.add(arrayClassValue)
             innerP1.innerText = innerText
             innerLi.append(innerP1)

            let innerP2 =  makeElement("p", "shows-tickets-list__"+stringName)
             innerP2.innerText = arrayInnerText

        innerLi.append(innerP2)

    return innerLi

}

// This function creates a single ticket using the makeElement and createLi functions made above

function createUl (object) {
    let outerUl = makeElement("ul", "shows-tickets")
    let innerButton = makeElement("button", "shows-tickets__button")

    let dateVar = new Date(Number(object.date))
    let dateFormatted =  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear();

        innerLi1 = createLi("DATES", "date", "shows-tickets-list__body--dissapear", dateFormatted)
        innerLi2 = createLi("VENUE", "body", "shows-tickets-list__body--dissapear", object.place)
        innerLi3 = createLi("LOCATION", "body", "shows-tickets-list__body--dissapear", object.location)

        innerButton.type = "submit"
        innerButton.innerText = "BUY TICKETS"

        outerUl.append(innerLi1)
        outerUl.append(innerLi2)
        outerUl.append(innerLi3)
    outerUl.append(innerButton)

    return outerUl
}



// Array of Venues for the buttons
let venueArray = ["Ronald Lane", "Pier 3 East", "View Lounge ", "Hyatt Agency", "Moscow Center", "Press Club" ]

// This function creates all of the functions and appends it to the shows variable, which means now everything is displayed on the document

const createTickets = () => {

    axios.get(`${SHOWS_URL}?api_key=${API_KEY}`)
    .then(result => {
        const showsArray = result.data
        showsArray.forEach((item => {
            let ticketsArray = createUl(item)
            shows.appendChild(ticketsArray)
            return shows
        }))
        for (let i = 0; i < venueArray.length; i++) {
            document.querySelectorAll(".shows-tickets__button")[i].addEventListener("click", event => {
                console.log(venueArray[i])
            })
        }
        let appearItem = [document.querySelectorAll(".shows-tickets-list__silver")[1], document.querySelectorAll(".shows-tickets-list__silver")[2], document.querySelectorAll(".shows-tickets-list__silver")[3]]
            appearItem.forEach((element) => {
                element.classList.remove("shows-tickets-list__body--dissapear")
            })
    })
    .catch(error => console.log(error))
} 


createTickets()






// For each button, log an Item to the console 

