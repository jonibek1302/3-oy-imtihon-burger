let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let btn6 = document.querySelector(".btn-6");
i = 170;
let burgers = document.querySelector(".burgers");
let burger1 = document.querySelector(".burger-1");
totalprice = 2;

btn1.addEventListener("click", (e) => {
let addd1 = `  <div class="burgerin burgerin-1"><img class="burger-img burger-img-1"  src="burger-layers/cheese.svg" ></div>`
burger1.innerHTML += addd1;
totalprice += 2
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger1.addEventListener("click", (e) => {
// e.preventDefoult();
e.target.remove();
totalprice -= 2;
document.querySelector(".totall").textContent = `$${totalprice}`;
});

let burger2 = document.querySelector(".burger-2");
btn2.addEventListener("click", (e) => {
let addd2 = ` <div class="burgerin burgerin-2"><img class="burger-img burger-img-2"  src="burger-layers/meat.svg" ></div>`
burger2.innerHTML += addd2;
totalprice += 5
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger2.addEventListener("click", (e) => {
e.target.remove();
totalprice -= 5;
document.querySelector(".totall").textContent = `$${totalprice}`;
});
//////////3
let burger3 = document.querySelector(".burger-3");
btn3.addEventListener("click", (e) => {
let addd3 = ` <div class="burgerin burgerin-3"><img class="burger-img burger-img-3"  src="burger-layers/onion.svg" ></div>`
burger3.innerHTML += addd3;
totalprice += 1
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger3.addEventListener("click", (e) => {
e.target.remove();
totalprice -= 1;
document.querySelector(".totall").textContent = `$${totalprice}`;
});
///////////4
let burger4 = document.querySelector(".burger-4");
btn4.addEventListener("click", (e) => {
let addd4 = ` <div class="burgerin burgerin-4"><img class="burger-img burger-img-4"  src="burger-layers/salad.svg" ></div>`
burger4.innerHTML += addd4;
totalprice += 1;
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger4.addEventListener("click", (e) => {
e.target.remove();
totalprice -= 1;
document.querySelector(".totall").textContent = `$${totalprice}`;
});
/////////5
let burger5 = document.querySelector(".burger-5");
btn5.addEventListener("click", (e) => {
let addd5 = ` <div class="burgerin burgerin-5"><img class="burger-img burger-img-5"  src="burger-layers/tomato.svg" ></div>`
burger4.innerHTML += addd5;
totalprice += 2
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger5.addEventListener("click", (e) => {
e.target.remove();
totalprice -= 2;
document.querySelector(".totall").textContent = `$${totalprice}`;
});

/////////6
let burger6 = document.querySelector(".burger-6");
btn6.addEventListener("click", (e) => {
let addd6 = ` <div class="burgerin burgerin-6"><img class="burger-img burger-img-6"  src="burger-layers/pickle.svg" ></div>`
burger6.innerHTML += addd6;
totalprice += 3;
document.querySelector(".totall").textContent = `$${totalprice}`;

});
burger6.addEventListener("click", (e) => {
e.target.remove();
totalprice -= 3;
document.querySelector(".totall").textContent = `$${totalprice}`;
});

let btn7 = document.querySelector(".btn-7");
btn7.addEventListener("click", (e) => {
    let num = Math.floor(Math.random()*24 + 10);
    alert(`Iltimos kutib turin sizning buyurtma raqamingiz ${num}`);
 document.querySelector(".totall").innerText = "$2";
});
//10->35