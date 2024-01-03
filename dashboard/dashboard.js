import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signOut, updateEmail, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAw6_FHLecclGojXwfic9f11kxXmk2JwR0",
    authDomain: "social-media-with-sir-ghous.firebaseapp.com",
    projectId: "social-media-with-sir-ghous",
    storageBucket: "social-media-with-sir-ghous.appspot.com",
    messagingSenderId: "700965976396",
    appId: "1:700965976396:web:0a068e83d5d2fa5f6f37e9",
    measurementId: "G-7WP4NFJCQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);


const logoutBtn = document.querySelector('#logoutBtn')
// console.log(logoutBtn);
const updateEmailbtn = document.querySelector('#updateEmail')
// console.log(updateEmail);
const verifyEmailbtn = document.querySelector('#verifyEmail')
// console.log(verifyEmailbtn);
const cardArea = document.querySelector('#cardArea')
// console.log(cardArea);
const userEmail = document.querySelector('#userEmail')
// console.log(userEmail);

// userEmail.innerHTML= UserImpl.email

let div = document.createElement('div')
div.setAttribute('class', "col-sm-3 mb-3 mb-sm-0")

div.innerHTML = ` <p id="profileBtn">

<a href="../profile/profile.html">
    <strong class="User_name">Muhammad Hasan Ashraf </strong>
</a>
</p>


<p>
<strong>${user.UserImpl.email}
</strong>
</p>
<p>
<strong> ${user.UserImpl.uid}
</strong>
</p>
<p>
<strong> ${user.UserImpl.emailVerified}
</strong>
</p>
<p>
<strong>Friends </strong>
</p>
<p>
<strong>Feeds (Most Recents) </strong>
</p>
<p>
<strong>Groups </strong>
</p>
<p>
<strong>Marketplace </strong>
</p>
<p>
<strong>Watch </strong>
</p>
<p>
<strong>Memories </strong>
</p>
<p>
<strong>Saved</strong>
</p>
<p>
<strong>Pages </strong>
</p>
<div class="shortcuts ">
<hr>
<p style="color: rgb(109, 108, 108);">
    Your Shortcuts Games
</p>
<p>
    <strong>Candy Crush Saga</strong>
</p>
<p>
    <strong>8 Ball Pool</strong>
</p>
<p>
    <strong>Grand Thieft Auto 5
    </strong>
</p>
<p>
    <strong>Counter Strike</strong>
</p>
<p>
    <strong>Subway Surfers</strong>
</p>
<p>
    <strong>Word link</strong>
</p>
`

cardArea.appendChild(div)


function logoutHandler() {

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}


onAuthStateChanged(auth, (user) => {
    if (user) {

        const uid = user.uid;
        //   console.log(uid)
        // ...
    } else {
        window.location.href = '../index.html'
    }
});

function updateEmailHandler() {



    updateEmail(auth.currentUser, "muhammadhasan3866@gmail.com").then(() => {
        // Email updated!
        // console.log(auth.currentUser)
        console.log('UPDATED')
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
        console.log(error)
    });
    verifyEmailHandler()



}


function verifyEmailHandler() {



    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });



}















logoutBtn.addEventListener('click', logoutHandler)
updateEmailbtn.addEventListener('click', updateEmailHandler)
verifyEmailbtn.addEventListener('click', verifyEmailHandler)