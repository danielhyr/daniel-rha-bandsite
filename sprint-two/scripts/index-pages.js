
///////// Creating a bunch of Preloaded Comments in Javascript

// create an array of objects containing name, date, and comment
let commentsLoaded = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        class: "comments-pre--topBorder",
        pictureClass: "comments-pre__circle",
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        pictureClass: "comments-pre__circle",

    },
    {
        name: 'Miles Acosta',
        date: ' 12/20/2020',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        class:"comments-pre--bottomBorder",
        pictureClass: "comments-pre__circle",

    },
    
]
let body = document.querySelector('body')

// Created function to make elements and give them classnames

const makeElement = (elementName, className) => {
    let varName =  document.createElement(elementName)
    varName.classList.add(className)
    return varName
  }

//1. create section element, and give it the class of "section" to hold future div items

let section = makeElement('section', 'comments')

//2. Create a function named displayComment that takes information from the objects and creates div items and appends it to the document

function displayComment (arrayofObjects) {
    // Create the outermost Div comments-pre
    let outerDiv = makeElement("div", "comments-pre");
        outerDiv.classList.add(arrayofObjects.class)
        // Create the Ininer Div comments-pre-top
        let innerDiv = makeElement("div", "comments-pre-top");
            outerDiv.append(innerDiv)
            // comments-pre__circle 
            let innerCircle = makeElement("div", arrayofObjects.pictureClass);
            innerDiv.append(innerCircle)
                // Create the inner P tags
                let innerP = makeElement("p", "comments-pre-top__name")
                innerP.innerText = arrayofObjects.name
                innerDiv.append(innerP)
                // Create the second inner P 
                let innerP2 = makeElement("p", "comments-pre-top__date")
                innerP2.innerText = arrayofObjects.date
                innerDiv.append(innerP2)
            //Create the outer p, for comment
            let innerP3 = makeElement("p", "comments-pre-bottom__loaded")
            innerP3.innerText = arrayofObjects.comment
            outerDiv.append(innerP3)
            
         section.appendChild(outerDiv)
        return outerDiv
}



// Created another function loadHTML that repeats the above process as many times as the length of the given array of objects

function loadHtml () {
    for (let i = 0; i < commentsLoaded.length; i++) {
        displayComment(commentsLoaded[i])
    }
        body.insertBefore(section, body.children[2])
    
    }
// Declared it once to set initial comments'

    loadHtml ()
    


let form = document.querySelector('.comments-form')

// This eventlistener listens to the submit event, prevents its default page reloading default event, and checks if the fields are empty first.
// If a field is empty, it gives it the attribute of "required"
// If they are filled out, it takes those information, stores it into an object, and pushes it into the existing array of objects, removes the attributes, then
// They call on the loadHtml function to reload the new comments section again, this time with the new comment

form.addEventListener('submit', event => {
    event.preventDefault();
    let nameField = document.getElementById("name")
    let commentField = document.getElementById("comment")
    if(event.target.name.value === "" ) {
        nameField.setAttribute('required', 'required')
        return
    }else if (event.target.comment.value === ""){
        commentField.setAttribute('required', 'required')
        return
    } 
    
    else { 
        section.innerHTML =""
            // variables for the document to select, the name input
            let userName = nameField.value;
            // , and the comment input.
            let userComment = commentField.value;
            // For Today's date
            let todayVar = new Date()
            let date = '0' + (todayVar.getMonth()+1) + '/' + todayVar.getDate() + '/' + todayVar.getFullYear();

            commentsLoaded.unshift ({
                name: userName,
                date: date,
                comment: userComment,
                class: "comments-pre--newBorder",
                pictureClass:"comments-pre__circle--pictureClass",
                exactTime: Date.now(), 
            })
            nameField.removeAttribute('required')
            commentField.removeAttribute('required')

        loadHtml ()
    form.reset()
}})

// removing attribute of "required" if the user clicks anywhere else on the page, to turn it back to default

body.addEventListener('click', e => {
    let nameField = document.getElementById("name")
    let commentField = document.getElementById("comment")

    nameField.removeAttribute('required')
    commentField.removeAttribute('required')

})

// Making a timestamp: Timestamp function just for minutes and seconds

// const timeAgo = (date) => {
//     let seconds = Math.floor((new Date() - date) / 1000);
      
//     let interval = Math.floor(seconds / 60);
//     if (interval > 1) {
//         return interval + " minutes ago";
//       }

//       interval = Math.floor(seconds/1) ;
//       if (interval > 1) {
//         return Math.floor(seconds) + " seconds ago";
//     }

//       setTimeout(timeAgo, 1000);

// }

// // let innerPtime = makeElement("p", "comments-pre-top__timestamp")

// // let timeVariable = arrayofObjects.exactTime

// let aftime = new Date

// let realTime = `${timeAgo(aftime)}`
// I gave up
