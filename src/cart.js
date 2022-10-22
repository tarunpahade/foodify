let label= document.getElementById('label')
let scart=document.getElementById('shopping-cart')


let basket=JSON.parse(localStorage.getItem("data")) || [];



let calc=()=>{

    const navcart= document.getElementById('cartproducts')
    navcart.innerHTML=basket.map((v)=>v.items).reduce((x,y)=>x+y,0)
    
    }
    calc()

   
    let generatecards = () => {
        if (basket.length !== 0) {
          return (scart.innerHTML = basket
            .map((x) => {

              var search = pizza.find((y) => y.pizza.replace(/ +/g, "") === x.id) || burger.find((y) => y.pizza.replace(/ +/g, "") === x.id) || pasta.find((y) => y.pizza.replace(/ +/g, "") === x.id) || fries.find((y) => y.pizza.replace(/ +/g, "") === x.id) || [];
             
              return `
              <div class="cart-item">
              <div class='img-price'>
                <img class='cart-img' src=${search.url} alt="" />
                <p class="cart-item-price">₹ ${search.price}</p>
                
        </div>
        <div class="details">
                  <div class="title-price-x">
                    
                        <p>${search.pizza}</p>
                     
                      
                     
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
    
      if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          items: 1,
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
      // console.log(search.item);
      document.getElementById(id).innerHTML = search.items;
      calc();
      TotalAmount();
    };
    
    let removeItem = (id) => {
      let selectedItem = id;
      // console.log(selectedItem.id);
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
            let { items, id } = x;
            var search = pizza.find((y) => y.pizza.replace(/ +/g, "") === x.id) || burger.find((y) => y.pizza.replace(/ +/g, "") === x.id) || pasta.find((y) => y.pizza.replace(/ +/g, "") === x.id) || fries.find((y) => y.pizza.replace(/ +/g, "") === x.id) || [];
    
            return items * search.price;
          })
          .reduce((x, y) => x + y, 0);
        // console.log(amount);
        label.innerHTML = `
        <h2>Total Bill : ₹ ${amount}</h2>
        
        <button class="checkout" onclick='orderrOnClick()'>Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        <br>
        <input type='text' class='customerName' id='customerName' placeholder='Enter Your Name' req>
        <input type='text' class='customerName' id='tablenumber' placeholder='Enter Table No. Given below Qr code' req>
        <br>
        <textarea class='customerName' id='additionalinfo' cols='17' rows='4' placeholder='Add additional instruction(optionnal)'></textarea>
        `;
      } else return;
      
    
    };
    
    TotalAmount();
    let orderrOnClick =()=>{
const customerName=document.getElementById('customerName')
const tablenumber=document.getElementById('tablenumber')
const additionalinfo=document.getElementById('additionalinfo')

document.querySelector('.checkout').onclick=()=>{

   if(customerName.value.length >0 && tablenumber.value.length=='' )
  {alert('Please fill the table number given below qr menu')}
  else if(tablenumber.value.length >0 && customerName.value.length=='' )
  {alert('Please enter your name')}


 else if (customerName.innerText === '' && tablenumber.value === '') { alert('Please fill all the given inputs') }

  
  else{

    basket.push({
      'customerName':customerName.value,
      'table number':tablenumber.value,
      'additional instructions':additionalinfo.value,
    })
    console.log(basket);
    Email.send({
      SecureToken : "4d70aaf4-1a3e-4124-956f-e446ebea2a61",
      Username : "tarunpahade55@gmail.com",
      Password : "A9F73A5DF4D37582D5EF82CE707AA1E7D235",
      To : 'tarunpahade55@gmail.com',
      From : "tarunpahade55@gmail.com",
      Subject : 'food order',
      Body : basket
  })
  
label.innerHTML=`
<h2>${customerName.value} Your order will be ready soon</h2>

<button><a href='index.html'>Order More</button>
`

// afterOrder()

for (let index = 0; index < 2; index++) {
   document.getElementsByTagName('i')[index].style.display='none'
  
}
basket = [];

localStorage.setItem("data", JSON.stringify(basket));

  }
}}
//next step
//make another page for customer after they checkout

