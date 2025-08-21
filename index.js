const posts = [  //lists of Oldagram posts
    {
        name: "Edvard Munch",
        username: "eddie1863",
        location: "Oslo, Norway",
        avatar: "images/avatar-munch.jpg",
        photo: "images/post-munch.jpg",
        caption: "1:00am and my kids won't stop sleep aaarrggh",
        likes: 72
    },
    {
        name: "Frida Kahlo",
        username: "frida1907",
        location: "Mexico City, Mexico",
        avatar: "images/avatar-kahlo.jpg",
        photo: "images/post-kahlo.jpg",
        caption: "when all my pets decide to photo bomb...",
        likes: 284
    },
    {
        name: "Francis Bacon",
        username: "Fran1909",
        location: "Dublin, Ireland",
        avatar: "images/avatar-bacon.jpg",
        photo: "images/post-bacon.jpg",
        caption: "looks like i'm allergic to seafood, can you tell?",
        likes: 99
    },
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

function render() {
    const feed = document.getElementById("feed")
    let content = ""
    for (let i=0; i<posts.length; i++) {  //For-loop to go through each post of the array
        content += 
            `<div class="header-post">
                <img class="poster-avatar" src="${posts[i].avatar}" alt="Portrait ${posts[i].name}">
                <div class="poster-details">
                    <h2 class="poster-name">${posts[i].name}</h2>
                    <h3 class="poster-location">${posts[i].location}</h3>
                </div>
            </div>
            <img class="main-photo post${i}" src="${posts[i].photo}" alt="Selfie ${posts[i].name}">
            <div class="icons">
                <svg class="icon-heart post${i}" id="heart-${i}" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                <img class="icon-comment" src="images/icon-comment.png">
                <img class="icon-share" src="images/icon-share.png">
            </div>
            <p class="likes">
                <span class="total-likes" id="likes-${i}">${posts[i].likes}</span>likes
            </p>
            <p class="caption">
                <span class="poster-username">${posts[i].username}</span><span class="poster-caption">${posts[i].caption}</span>
            </p>`
            
        if (i<(posts.length - 1)) {  // adds a divider at between each post except last item in the array  
            content +=
                `<div class="divider"></div>`
        }          
    }
    feed.innerHTML = content  // DOM manipulation outside of loop 
} 

render()

function likes() {
    for (let i=0; i<posts.length; i++) {
        document.querySelectorAll(`.post${i}`).forEach(el => { // selects all the elements with the post class (img and heart)
            el.addEventListener("dblclick", function () { // add eventlistener to both
                const heartPath = document.querySelector(`#heart-${i} path`);
                heartPath.style.fill = heartPath.style.fill === "red" ? "none" : "red"; // toggle the red fill color of the heart on and off
                heartPath.style.stroke = heartPath.style.stroke === "red" ? "black" : "red"; // toggle the black stroke of the heart on and off

                // Update likes count too
                const likes = document.getElementById(`likes-${i}`);
                if (heartPath.style.fill === "red") {
                    posts[i].likes++;
                } else {
                    posts[i].likes--; // if heart is red, then increase the count, if not, then decrease the count
                }
                likes.innerHTML = posts[i].likes;
            });
        });
    }
}   

likes()