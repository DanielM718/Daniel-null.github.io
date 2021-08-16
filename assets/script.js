let database = firebase.database().ref();


database.on('child_added', function(childData) {
    let blogData = childData.val();

    

    let MessageData = document.createElement('p');
    MessageData.innerHTML = blogData.MESSAGE
})