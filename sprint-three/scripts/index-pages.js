
///////// Creating a bunch of Preloaded Comments in Javascript


// Dom selectors

let body = document.querySelector('body')


// Created function to make elements and give them classnames

const makeElement = (elementName, className) => {
    let varName =  document.createElement(elementName)
    varName.classList.add(className)
    return varName
  }

// create sectionelement with comments class
  let section = makeElement('section', 'comments')



// Writing the axios comment url and register
const COMMENT_URL = "https://project-1-api.herokuapp.com/comments"
const API_KEY = "47bba9b7-d7ec-48dc-a68a-93ec482f02de";
// axios get request

const displayComment = () => {
    axios
    .get(`${COMMENT_URL}?api_key=${API_KEY}`)
        .then(result => {
            const commentsArray = result.data
            commentsArray.forEach((comment) => {
                if (comment.name === "Connor Walton") {
                    innerDisplay(comment, "top", "")
            } else if (comment.name === "Emilie Beach") {
                innerDisplay(comment, "middle", "")
            } else if (comment.name === "Miles Acosta"){
                innerDisplay(comment, "bottom", "")
            } else {
                innerDisplayFirst(comment, "new", "--pictureClass")
            }
        })

        }).catch(error => console.log(error))
                body.insertBefore(section, body.children[2])

}


// Call function to initial load the three comments
displayComment()

// Function innerdisplay to display comments

function innerDisplay (comment, position, picture) {
    let outerDiv = makeElement("div", "comments-pre");
    outerDiv.classList.add(`comments-pre--${position}Border`)

    let innerDiv = makeElement("div", "comments-pre-top");
    outerDiv.append(innerDiv)

    let innerCircle = makeElement("div", `comments-pre__circle${picture}`);
    innerDiv.append(innerCircle)

    let innerP = makeElement("p", "comments-pre-top__name")
    innerP.innerText = comment.name
    innerDiv.append(innerP)

    let innerP2 = makeElement("p", "comments-pre-top__date")
    let dateVar = new Date(Number(comment.timestamp))
    let dateFormatted =  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear();
    innerP2.innerText = dateFormatted
    innerDiv.append(innerP2)
    let innerP3 = makeElement("p", "comments-pre-bottom__loaded")
    innerP3.innerText = comment.comment
    outerDiv.append(innerP3)

    section.appendChild(outerDiv)
        return outerDiv
}

function innerDisplayFirst (comment, position, picture) {
    let outerDiv = makeElement("div", "comments-pre");
    outerDiv.classList.add(`comments-pre--${position}Border`)

    let innerDiv = makeElement("div", "comments-pre-top");
    outerDiv.append(innerDiv)

    let innerCircle = makeElement("div", `comments-pre__circle${picture}`);
    innerDiv.append(innerCircle)

    let innerP = makeElement("p", "comments-pre-top__name")
    innerP.innerText = comment.name
    innerDiv.append(innerP)

    let innerP2 = makeElement("p", "comments-pre-top__date")
    let dateVar = new Date(Number(comment.timestamp))
    let dateFormatted =  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear();
    innerP2.innerText = dateFormatted
    innerDiv.append(innerP2)

    let innerP3 = makeElement("p", "comments-pre-bottom__loaded")
    innerP3.innerText = comment.comment
    outerDiv.append(innerP3)

    section.appendChild(outerDiv)

    section.insertBefore(outerDiv, section.children[0])

        return outerDiv
}

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
        // section.innerHTML =""

        document.querySelectorAll(".comments-pre").forEach(event => event.remove())
            // variables for the document to select, the name input
            // , and the comment input.
            let userName = nameField.value;
            let userComment = commentField.value;

            const newComment =  {
                name: userName,
                comment: userComment
            }

            axios.post(`${COMMENT_URL}?api_key=${API_KEY}`, newComment).then((response) => {
                nameField.removeAttribute('required')
                commentField.removeAttribute('required')
                displayComment()

            })


            form.reset()
}})

// removing attribute of "required" if the user clicks anywhere else on the page, to turn it back to default

body.addEventListener('click', e => {
    let nameField = document.getElementById("name")
    let commentField = document.getElementById("comment")

    nameField.removeAttribute('required')
    commentField.removeAttribute('required')

})

function turnDate () {

}


// let dateTime = new Date(Number(item.timestamp))
