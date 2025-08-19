const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        photo: "images/post-vangogh.jpg",
        caption: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        photo: "images/post-courbet.jpg",
        caption: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        photo: "images/post-ducreux.jpg",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feed = document.getElementById("feed")

function render() {
    let content = ""
    for (i=0; i<posts.length; i++) {
        if(i<(posts.length - 1)) {
            content += 
                `<div class="header-post">
                    <img class="poster-avatar" src="${posts[i].avatar}" alt="Portrait ${posts[i].name}">
                    <div class="poster-details">
                        <h2 class="poster-name">${posts[i].name}</h2>
                        <h3 class="poster-location">${posts[i].location}</h3>
                    </div>
                </div>
                <img class="main-photo" src="${posts[i].photo}" alt="Selfie ${posts[i].name}">
                <div class="icons">
                    <img class="icon-heart" src="images/icon-heart.png">
                    <img class="icon-comment" src="images/icon-comment.png">
                    <img class="icon-share" src="images/icon-share.png">
                </div>
                <p class="likes">
                    <span class="total-likes">${posts[i].likes}</span>likes
                </p>
                <p class="caption">
                    <span class="poster-username">${posts[i].username}</span><span class="poster-caption">${posts[i].caption}</span>
                </p>
                <div class="divider"></div>`      

        } else {
            content +=
                `<div class="header-post">
                    <img class="poster-avatar" src="${posts[i].avatar}" alt="Portrait ${posts[i].name}">
                    <div class="poster-details">
                        <h2 class="poster-name">${posts[i].name}</h2>
                        <h3 class="poster-location">${posts[i].location}</h3>
                    </div>
                </div>
                <img class="main-photo" src="${posts[i].photo}" alt="Selfie ${posts[i].name}">
                <div class="icons">
                    <img class="icon-heart" src="images/icon-heart.png">
                    <img class="icon-comment" src="images/icon-comment.png">
                    <img class="icon-share" src="images/icon-share.png">
                </div>
                <p class="likes">
                    <span class="total-likes">${posts[i].likes}</span>likes
                </p>
                <p class="caption">
                    <span class="poster-username">${posts[i].username}</span><span class="poster-caption">${posts[i].caption}</span>
                </p>`            
        }
    }
     
    feed.innerHTML = content
}

render()