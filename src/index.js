



document.querySelectorAll('.food-item').forEach(item => {
    item.onclick = function () {

        if(item.dataset.item==='pizza'){
          
          generatecards(pizza)
          
            

  
        }
        if(item.dataset.item==='burger'){
          
            generatecards(burger)
            

        }
        if(item.dataset.item==='fries'){
          
            generatecards(fries)

        }
        if(item.dataset.item==='pasta'){
          
            generatecards(pasta)

        }

        document.querySelector('.food').style.display = 'none'
        

    }                                                                        
   
   
   })




const lala=document.querySelector('.lala')
const input=document.querySelector('.text2')
const plus=document.querySelector('.plus')
const minus=document.querySelector('.minus')
const bbl=document.querySelector('.bbl')


  let generatecards=(food)=>{
return (lala.innerHTML= food.map((x)=>{
    let id=x.pizza ;
    let search=basket.find((x)=>x.id=== id) || []
return `
<div class="card" id='product-id-${id}' >
<img class="image" src="${x.url}">
<div class="text">
<h4 class="name">${id}</h4>
<div class="btbt"><p class="price">₹${x.price}</p>
<div class="box"><button class="add"style="display: none;">Add</button>
<div class="bbl" >
<button class="minus" onclick='decrement(${id.replace(/ +/g, "")})'>-</button>
<span class="text2" max="10" min="0" type="number" id='${id.replace(/ +/g, "")}'>${search.items === undefined? 0: search.items}</span>
<button class="plus" onclick='increment(${id.replace(/ +/g, "")})'>+</button></div>
</div></div></div></div>`
}).join('')
)
  }
let basket=JSON.parse(localStorage.getItem("data")) || []


let increment =(id)=>{

let selecteditem=id

let search=basket.find((y)=> y.id=== selecteditem.id );
if(search === undefined) {
    basket.push({
        id: selecteditem.id,
        items:1,
    })
}  else{
   search.items+=1
}


localStorage.setItem("data", JSON.stringify(basket));

update(selecteditem.id)
}
let decrement =(id)=>{

    let selecteditem=id
    let search=basket.find((y)=> y.id === selecteditem.id );
  if(search=== undefined)return;
  
  else  if(search.items === 0) return ;
    
else{
       search.items-=1
    }

    update(selecteditem.id)

basket=basket.filter((v) => v.items !== 0);


localStorage.setItem("data", JSON.stringify(basket));
}
    
let update=(id)=>{
   
    let search=basket.find((x)=>x.id === id.replace(/ +/g, "") )

    document.getElementById(id).innerHTML=search.items
calc()
}

let calc=()=>{

const navcart= document.getElementById('cartproducts')
navcart.innerHTML=basket.map((v)=>v.items).reduce((x,y)=>x+y,0)

}
calc()



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}