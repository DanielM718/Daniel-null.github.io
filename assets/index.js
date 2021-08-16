// container for post
let container = document.querySelector('container');

//forms
let title = document.querySelector('#title');
let message = document.querySelector('#message');
let name = document.querySelector('#name');

// post button
let submit = document.querySelector('#Post');


let database = firebase.database().ref();

// loading information from the database
database.on('child_added', function(childData) {
    let blogData = childData.val();
    console.log(blogData)
    console.log(blogData.MESSAGE)

    let MessageData = document.createElement('p');
    MessageData.innerHTML = blogData.MESSAGE

    container.append(MessageData);
})

// pushing data to the database
submit.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let titleData = title.value;
    let messageData  = message.value;
    let usernameData = name.value;

    // Update database here
    let value = {
        TITLE: titleData,
        MESSAGE: messageData,
        NAME: usernameData
    }

    database.push(value)
}
