let ticketsLoading = [
    {
        date: "Mon Sept 06 2021",
        venue: 'Ronald Lane',
        location: 'San Francisco, CA',
        classDissapear: "none"

    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA',
        classDissapear: "shows-tickets-list__body--dissapear"
    },
    {
        date: 'Fri Oct 15 2021 ',
        venue: 'View Lounge ',
        location: 'San Francisco, CA',
        classDissapear: "shows-tickets-list__body--dissapear"

    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
        classDissapear: "shows-tickets-list__body--dissapear"

    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA',
        classDissapear: "shows-tickets-list__body--dissapear"

    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
        classDissapear: "shows-tickets-list__body--dissapear"

    },
]

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

let innerLi

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

        innerLi1 = createLi("DATES", "date", object.classDissapear, object.date)
        innerLi2 = createLi("VENUE", "body", object.classDissapear, object.venue)
        innerLi3 = createLi("LOCATION", "body", object.classDissapear, object.location)

        innerButton.type = "submit"
        innerButton.innerText = "BUY TICKETS"

        outerUl.append(innerLi1)
        outerUl.append(innerLi2)
        outerUl.append(innerLi3)
    outerUl.append(innerButton)

    return outerUl
}


// This function creates all of the functions and appends it to the shows varaible

const createTickets = (array) => {
    for (let i = 0; i < array.length; i++) {
        let ticketsArray = createUl(array[i])
        shows.appendChild(ticketsArray)
    } 
    return shows
}

createTickets(ticketsLoading)


// For each button, log an Item to the console 

let venueArray = ["Ronald Lane", "Pier 3 East", "View Lounge ", "Hyatt Agency", "Moscow Center", "Press Club" ]
for (let i = 0; i < venueArray.length; i++) {
    document.querySelectorAll(".shows-tickets__button")[i].addEventListener("click", event => {
        console.log(venueArray[i])
    })
}

