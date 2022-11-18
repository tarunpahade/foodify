


document.querySelectorAll('.food-item').forEach(item => {
    item.onclick = function () {

        if(item.dataset.item==='saojiSpecial'){
          
          generatecards(saojiSpecial)
          
            

  
        }
        if(item.dataset.item==='specials'){
          
            generatecards(special)
            

        }
        if(item.dataset.item==='staters'){
          
            generatecards(staters)

        }
        if(item.dataset.item==='mainCourse'){
          
            generatecards(vegMainCorse)

        }
        if(item.dataset.item==='paneerCourse'){
          
            generatecards(paneerMainCorse)

        }
        if(item.dataset.item==='kalaMasala'){
          
            generatecards(kalaMasala)

        }
        if(item.dataset.item==='biryani'){
          
            generatecards(biryani)

        }
        if(item.dataset.item==='chinese'){
          
            generatecards(chinese)

        }
        if(item.dataset.item==='roti'){
          
            generatecards(roti)

        }
        if(item.dataset.item==='dal'){
          
            generatecards(dal)

        }
        if(item.dataset.item==='rice'){
          
            generatecards(rice)

        }
        if(item.dataset.item==='deserts'){
          
            generatecards(deserts)

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
    let id=x.item ;

    let search=basket.find((x)=>x.id=== id) || []
return `
<div class="card" id='product-id-${id}' >
<img class="image" src="${x.url}">
<div class="text">
<h4 class="name">${id}</h4>
<div class="btbt"><p class="price">₹${x.price}</p>
<div class="box">
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

var search9 = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || special.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || staters.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || biryani.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || chinese.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || roti.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || dal.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || rice.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) ||[];
if(search === undefined) {
   
    basket.push({
        id: selecteditem.id,
        items:1,
        price:search9.price,
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

