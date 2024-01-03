// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getFirestore,  collection, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
const db = getFirestore(app)





// get Elements into HTML 

const firstName = document.querySelector('#firstName ') 
// console.log(firstName)
const surName= document.querySelector('#surName') 
// console.log(surName)
const signupEmail= document.querySelector('#email-MobNum') 
// console.log(signupEmail)
const signupPassword = document.querySelector('#new-Password') 
// console.log(signupPassword)
const userMobNum = document.querySelector('#userMobNum') 
// console.log(userMobNum)



// Buttons login & signup

const signupBtn = document.querySelector('#signup-btn ') 
// console.log(signupBtn)
const loginBtn = document.querySelector('#loginBtn')
// console.log(loginBtn)


const loginEmailAddress = document.querySelector('#loginEmailAddress')
// console.log(loginEmailAddress)
const loginPassword = document.querySelector('#loginPassword')
// console.log(loginPassword)


const showPass = document.querySelector('#showPassword')
// console.log(showPassword)

let loggedInUser;


async function signUpHandler ()  {

    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
    .then( async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      loggedInUser = user.uid
      console.log(user)
      if(user) {

        try {
            const docRef = await addDoc(collection(db, "usersData"), {
              userName : firstName.value,
              userSurName : surName.value,
              userEmailAddress : signupEmail.value,
              autorId : loggedInUser 
              
              
      
            });
            // console.log(autorId)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
       
      }
      // console.log( loggedInUser)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });


    //



   
    

}



function loginHandler () {

    signInWithEmailAndPassword(auth, loginEmailAddress.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    if(user) {
        window.location.href = '../dashboard/dashboard.html'
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

//
//    if(errorCode == user-not-found){

//        alert('Email sahi likho chanda')
//    }
    console.log('errorCode', errorCode)
    console.log('errorMessage',errorMessage)
  });



}


 async function ewai () {
  try {
    const docRef = await addDoc(collection(db, "usersData"), {
      userName : firstName.value,
          userSurName : surName.value,
          userEmailAddress : signupEmail.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

signupBtn.addEventListener('click', signUpHandler)
loginBtn.addEventListener('click', loginHandler)