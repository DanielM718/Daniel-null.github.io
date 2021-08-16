// container for post
let container = document.querySelector('#container');

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

    let BlogPost = document.createElement('div')
    
    let NameData = document.createElement('p');
    NameData.innerHTML = blogData.NAME;
    
    let TitleData = document.createElement('p');
    TitleData.innerHTML = blogData.TITLE

    let MessageData = document.createElement('p');
    MessageData.innerHTML = blogData.MESSAGE

    BlogPost.append(NameData, TitleData, MessageData);

    container.append(BlogPost)
});

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
