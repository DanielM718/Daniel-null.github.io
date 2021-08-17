// container for post
let container = document.querySelector('#container');

//forms
let title = document.querySelector('#title');
let message = document.querySelector('#message');
let name = document.querySelector('#name');

// post button
let submit = document.querySelector('#Post');

// refrencing database
let database = firebase.database().ref();

// loading information from the database
database.on('child_added', function(childData) {
    let blogData = childData.val();
    console.log(blogData)
    console.log(blogData.MESSAGE)

    var postID = childData.key;
    console.log(postID)

    let anchor = document.createElement('a');
    anchor.href = './SubWeb/BlogPost/blog.html?id=' + postID;
    anchor.target = '_blank'
    anchor.id = postID;

    let BlogPost = document.createElement('div');
    
    let NameData = document.createElement('p');
    // class name for name data
    NameData.className = 'BlogName';
    NameData.innerHTML = blogData.NAME;
    
    let TitleData = document.createElement('p');
    // class name for title data
    TitleData.className = 'BlogTitle';
    TitleData.innerHTML = blogData.TITLE

    let MessageData = document.createElement('p');
    // class name for message data
    MessageData.className = 'BlogMessage'
    MessageData.innerHTML = blogData.MESSAGE

    // adds all the data into a div      
    BlogPost.append(NameData, TitleData, MessageData);

    // adds the div to the anchor
    anchor.append(BlogPost);

    // stores said div in the div container
    container.append(anchor)
});

// pushing data to the database
submit.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing

    // stores user input and assigns it a value for the databse to use and store
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
