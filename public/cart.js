let label= document.getElementById('label')
let scart=document.getElementById('shopping-cart')



let arrya=JSON.parse(localStorage.getItem("kot")) || [];
let basket=JSON.parse(localStorage.getItem("data")) || [];


const food=[]

let calc=()=>{

    const navcart= document.getElementById('cartproducts')
    navcart.innerHTML=basket.map((v)=>v.items).reduce((x,y)=>x+y,0)
    
    }
    calc()

   
    let generatecards = () => {
        if (basket.length !== 0) {
          return (scart.innerHTML = basket
            .map((x) => {

             var search = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === x.id) || special.find((y) => y.item.replace(/ +/g, "") === x.id) || staters.find((y) => y.item.replace(/ +/g, "") === x.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === x.id) || biryani.find((y) => y.item.replace(/ +/g, "") === x.id) || chinese.find((y) => y.item.replace(/ +/g, "") === x.id) || roti.find((y) => y.item.replace(/ +/g, "") === x.id) || dal.find((y) => y.item.replace(/ +/g, "") === x.id) || rice.find((y) => y.item.replace(/ +/g, "") === x.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === x.id) ||[];
             food.push(search.price,x.id,x.items);
              return `<div class="cart-item">
              <div class='img-price'>
                <img class='cart-img' src=${search.url} alt="" />
                <p class="cart-item-price">₹ ${search.price}</p>
                
        </div>
        <div class="details">
                  <div class="title-price-x">
                    
                        <p>${search.item}</p>
                     
                      
                     
                  </div>
                  <div class="buttons">
                  <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                  <div id=${x.id} class="quantity">${x.items}</div>
                  <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
              </div>
                 
        
                  <h4 class='totalamt'>Total ₹ ${x.items * search.price}</h4>
                </div>
              </div>`
                         


            }
    
            ).join(""))
      
          }
   
        else{
            scart.innerHTML=``
            label.innerHTML=`
            <h2>Ordered List is Empty</h2>
            <a href='index.html'><button class='homebtn'>Back Home</button></a>
            `;
        }
        
    }
  
    generatecards()



    let increment = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
var search9 = pizza.find((y) => y.pizza.replace(/ +/g, "") === selectedItem.id) || burger.find((y) => y.pizza.replace(/ +/g, "") === selectedItem.id) || pasta.find((y) => y.pizza.replace(/ +/g, "") === selectedItem.id) || fries.find((y) => y.pizza.replace(/ +/g, "") === selectedItem.id) || [];
      if (search === undefined) {
        basket.push({
          id: selectedItem.item,
          items: 1,
          price:search9.price
        });
      } else {
        search.items += 1;
      }
    
      generatecards();
      update(selectedItem.id);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    let decrement = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) return;
      else if (search.items === 0) return;
      else {
        search.items -= 1;
      }
      update(selectedItem.id);
      basket = basket.filter((x) => x.items !== 0);
      generatecards();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    let update = (id) => {
      let search = basket.find((x) => x.id === id);


      document.getElementById(id).innerHTML = search.items;
      calc();
      TotalAmount();
    };
    
    let removeItem = (id) => {
      let selectedItem = id;
  
      basket = basket.filter((x) => x.id !== selectedItem.id);
      generatecards();
      TotalAmount();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    let clearCart = () => {
      basket = [];
      generatecards();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    let TotalAmount = () => {
      if (basket.length !== 0) {
        let amount = basket
          .map((x) => {
            let { items, id ,price} = x;
            var search = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === x.id) || special.find((y) => y.item.replace(/ +/g, "") === x.id) || staters.find((y) => y.item.replace(/ +/g, "") === x.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === x.id) || biryani.find((y) => y.item.replace(/ +/g, "") === x.id) || chinese.find((y) => y.item.replace(/ +/g, "") === x.id) || roti.find((y) => y.item.replace(/ +/g, "") === x.id) || dal.find((y) => y.item.replace(/ +/g, "") === x.id) || rice.find((y) => y.item.replace(/ +/g, "") === x.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === x.id) ||[];


            return items * search.price;
          })
          .reduce((x, y) => x + y, 0);
    
        label.innerHTML = `
        <h2>Total Bill : ₹ ${amount}</h2>
        
       
      
        <br>
     
    
   
        <input type='text' name='name' class='customerName' id='customerName' placeholder='Enter Your Name' req>
        <input type='text' name="table" class='customerName' row='5' id='tablenumber' placeholder='Enter Table No. Given below Qr code' req>
        <br>
      
        <br>
        <button  class="checkout" onclick='orderrOnClick()'>Order Now</button>
        <button onclick="clearCart()" class="removeAll">Clear Menu</button>

    
        `;
      } else return;
     // </form>       
      // <form action="/haha" method='POST'>
    };
    
    TotalAmount();
    let orderrOnClick =()=>{
const customerName=document.getElementById('customerName')
const tablenumber=document.getElementById('tablenumber')


document.querySelector('.checkout').onclick=()=>{

   if(customerName.value.length >0 && tablenumber.value.length=='' )
  {alert('Please fill the table number given below qr menu')}
  else if(tablenumber.value.length >0 && customerName.value.length=='' )
  {alert('Please enter your name')}


 else if (customerName.innerText === '' && tablenumber.value === '') { alert('Please fill all the given inputs') }

  
  else{
 





let info={
  'customerName':customerName.value,
  'tableNumber':tablenumber.value,
  'orderedItems':basket,
}

arrya.push(info)


const baseUrl='http://localhost:4000/';
//send info to backend
async function getInfo(){

  const res=await fetch(baseUrl,
    {
      method:"POST",
    headers: {
"Content-Type": 'application/json'
    },
    body: JSON.stringify({
      pp:arrya})
  }

    
    ).then(response => {
      if (!response.ok) {                                  // ***
        console.log( "HTTP error " + response.status);  // ***
      }                                                    // ***
      // ...use `response.json`, `response.text`, etc. here
    })
    .catch(error => {
      console.log(error);
    });

  }
  getInfo()

document.cookie='cname='+JSON.stringify(arrya)



label.innerHTML=`
<h2>${customerName.value} Your order will be ready soon</h2>

<button><a href='index.html'>Order More</button>
`



for (let index = 0; index <  document.getElementsByTagName('i').length; index++) {
   document.getElementsByTagName('i')[index].style.display='none'
  
}

arrya=[]
localStorage.setItem("kot", JSON.stringify(arrya));
basket = [];
document.getElementsByTagName('i')[0].style.backgroundColor='red'
localStorage.setItem("data", JSON.stringify(basket));


  }

}}
//next step
//make another page for customer after they checkout
