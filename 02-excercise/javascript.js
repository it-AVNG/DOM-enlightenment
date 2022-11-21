//Method 2
const btn =document.querySelector('#btn');
btn.onclick = () => alert('Hello World');
//drawbacks: we can only have limited property,
//in this case element can only have 1 "onclick" event property


//Method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=> { 
     alert("Hello World!");
 });

btn2.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
})

//named Function
function alertFunction() {
    alert("YAY me");

}

const btn3 = document.querySelector('.btn3');
//utilise method 2

btn3.onclick = alertFunction;


//utilise method 3
btn3.addEventListener('click',alertFunction);