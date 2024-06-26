// image
// title
// price
// description
async function render() {
  let respons = await fetch("https://fakestoreapi.com/products?limit=20");
  let values = await respons.json();
  values.map(function (element) {
    let main = document.getElementById("product-grid");
    let sCard = document.createElement("div");
    sCard.setAttribute("id", "secand");
    main.appendChild(sCard);
    let image = document.createElement("img");
    image.setAttribute("src", `${element.image}`);
    image.setAttribute("id", "editImg");
    sCard.appendChild(image);

    let tital = document.createElement("p");
    tital.innerHTML = element.title;
    sCard.appendChild(tital);
    let price = document.createElement("P");
    price.innerHTML = element.price;
    sCard.appendChild(price);
    let description = document.createElement("P");
    description.innerHTML = element.description;
    sCard.appendChild(description);

    // console.log(element.title);
  });
}
render();

// Q2
// .................................................................................

// var updateBtn = document.querySelector("#update");
// var removeBtn = document.querySelector("#remove");
// var findBtn = document.querySelector("#find");

// function InsertData() {}
// insertBtn.addEventListener("click", InsertData);

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyA-n2v_kxdbPNhjEHgtEsy2ucMurjCbA18",
//   authDomain: "backend-9c129.firebaseapp.com",
//   databaseURL:
//     "https://backend-9c129-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "backend-9c129",
//   storageBucket: "backend-9c129.appspot.com",
//   messagingSenderId: "205099213983",
//   appId: "1:205099213983:web:f30e64a0f068385d0b6eaa",
// };

// const app = initializeApp(firebaseConfig);
// import {
//   getDatabase,
//   ref,
//   child,
//   get,
//   set,
//   update,
//   remove,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// const db = getDatabase(app);

// let insertBtn = document.querySelector("#insert");
// let ids = document.getElementById("enterID");
// let name = document.getElementById("enterName");
// let age = document.getElementById("enterAge");

// function add(e) {
//   e.preventDefault();
//   set(
//     ref(db, "User/" + name.values, {
//       User: name.values,
//       id: ids.values,
//       age: age.values,
//     })
//   );
//   alert("done");
// }

// insertBtn.addEventListener("click", add);
