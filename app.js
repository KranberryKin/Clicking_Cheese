//Arrays and Dictionaries
//#region
let clickPurchase = {
  cheeseKnife : {
    price : 1,
    amount : 1,
    increment : 1,
  },
  cheeseShovel : {
    price : 5,
    amount : 0,
    increment : 5,
  },
  cheesePickaxe : {
    price : 20,
    amount : 0,
    increment : 25,
  }
}

let autoPurchase = {
  cheeseCart : {
    price : 10,
    amount : 0,
    increment : 5,
  },
  cheeseWagon : {
    price : 30,
    amount : 0,
    increment : 20,
  },
  cheeseTrain : {
    price : 100,
    amount : 0,
    increment : 75,
  }
}
//#endregion
//Variables
let totalCheese = 0


//Dictionary Elements
//#region
const KnifeIncElem = clickPurchase.cheeseKnife.increment
const ShovelIncElem = clickPurchase.cheeseShovel.increment
const PickIncElem = clickPurchase.cheesePickaxe.increment
const CartIncElem = autoPurchase.cheeseCart.increment
const WagonIncElem = autoPurchase.cheeseWagon.increment
const TrainIncElem = autoPurchase.cheeseTrain.increment

let KnifeAmtElem = clickPurchase.cheeseKnife.amount
let KnifePriElem = clickPurchase.cheeseKnife.price
let ShovelAmtElem = clickPurchase.cheeseShovel.amount
let ShovelPriElem = clickPurchase.cheeseShovel.price
let PickAmtElem = clickPurchase.cheesePickaxe.amount
let PickPriElem = clickPurchase.cheesePickaxe.price
let CartAmtElem = autoPurchase.cheeseCart.amount
let CartPriElem = autoPurchase.cheeseCart.price
let WagonAmtElem = autoPurchase.cheeseWagon.amount
let WagonPriElem = autoPurchase.cheeseWagon.price
let TrainAmtElem = autoPurchase.cheeseTrain.amount
let TrainPriElem = autoPurchase.cheeseTrain.price
//#endregion

//Id Elements
//#region
const knifePriceID = document.getElementById('knifepriceid')
const shovelPriceID = document.getElementById('shovelpriceid')
const pickaxePriceID = document.getElementById('pickaxepriceid')
const cartPriceID = document.getElementById('cartpriceid')
const wagonPriceID = document.getElementById('wagonpriceid')
const trainPriceID = document.getElementById('trainpriceid')

const knifeAmtID = document.getElementById('knifeAmtId')
const shovelAmtID = document.getElementById('shovelAmtId')
const pickaxeAmtID = document.getElementById('pickaxeAmtId')
const cartAmtID = document.getElementById('cartAmtId')
const wagonAmtID = document.getElementById('wagonAmtId')
const trainAmtID = document.getElementById('trainAmtId')

const totCheeseID = document.getElementById('totCheese')

//#endregion


//Functions

function Clicker() {
  let a = Math.floor(KnifeAmtElem * KnifeIncElem);
  totalCheese += a;
  let b = Math.floor(ShovelAmtElem * ShovelIncElem);
  totalCheese += b;
  let c = Math.floor(PickAmtElem * PickIncElem);
  totalCheese += c;
  draw();
}

function Buy(String) {
  switch (String) {
    case 'knife':
      if (totalCheese >= KnifePriElem) {
        totalCheese -= KnifePriElem;
        KnifeAmtElem++;
        PriceIncrease('knife');
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
    case 'shovel':
      if (totalCheese >= ShovelPriElem) {
        totalCheese -= ShovelPriElem;
        ShovelAmtElem++;
        PriceIncrease('shovel');
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
    case 'pickaxe':
      if (totalCheese >= PickPriElem) {
        totalCheese -= PickPriElem;
        PickAmtElem++;
        PriceIncrease('pickaxe');
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
    case 'cart':
      if (totalCheese >= CartPriElem) {
        totalCheese -= CartPriElem;
        CartAmtElem++;
        PriceIncrease('cart');
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
    case 'wagon':
      if (totalCheese >= WagonPriElem) {
        totalCheese -= WagonPriElem;
        WagonAmtElem++;
        PriceIncrease('wagon');
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
    case 'train':
      if (totalCheese >= TrainPriElem) {
        totalCheese -= TrainPriElem;
        TrainAmtElem++;
        PriceIncrease('train')
      } else {
        alert("You Don't Have Enough Cheeeeeeeeese!")
      }
      break;
  }
}

function PriceIncrease(String) {
  switch (String) {
    case 'knife':
      let a = Math.ceil(KnifePriElem * 1.2);
       KnifePriElem = a;
      break;
    case 'shovel':
      let b = Math.ceil(ShovelPriElem * 1.2);
       ShovelPriElem = b;
      break;
    case 'pickaxe':
      let c = Math.ceil(PickPriElem * 1.2);
       PickPriElem = c;
      break;
    case 'cart':
      let d = Math.ceil(CartPriElem * 1.2);
       CartPriElem = d;
      break;
    case 'wagon':
      let e = Math.ceil(WagonPriElem * 1.2);
       WagonPriElem = e;
      break;
    case 'train':
      let f = Math.ceil(TrainPriElem * 1.2);
       TrainPriElem = f;
      break;
  }
  SetValues();
}

function SetValues() {
  let KnifeAmtElem = clickPurchase.cheeseKnife.amount
  let KnifePriElem = clickPurchase.cheeseKnife.price
  let ShovelAmtElem = clickPurchase.cheeseShovel.amount
  let ShovelPriElem = clickPurchase.cheeseShovel.price
  let PickAmtElem = clickPurchase.cheesePickaxe.amount
  let PickPriElem = clickPurchase.cheesePickaxe.price
  let CartAmtElem = autoPurchase.cheeseCart.amount
  let CartPriElem = autoPurchase.cheeseCart.price
  let WagonAmtElem = autoPurchase.cheeseWagon.amount
  let WagonPriElem = autoPurchase.cheeseWagon.price
  let TrainAmtElem = autoPurchase.cheeseTrain.amount
  let TrainPriElem = autoPurchase.cheeseTrain.price
  draw();
}



function draw() {
totCheeseID.innerHTML = `<h3>${totalCheese} Cheese</h3>`
  //Prices
knifePriceID.innerHTML = `<p>Price: ${KnifePriElem}</p>`
shovelPriceID.innerHTML = `<p>Price: ${ShovelPriElem}</p>`
pickaxePriceID.innerHTML = `<p>Price: ${PickPriElem}</p>`
cartPriceID.innerHTML = `<p>Price: ${CartPriElem}</p>`
wagonPriceID.innerHTML = `<p>Price: ${WagonPriElem}</p>`
trainPriceID.innerHTML = `<p>Price: ${TrainPriElem}</p>`
//Amount
knifeAmtID.innerHTML = `
<h4>${KnifeAmtElem} Cheese Knifes</h4>
`
shovelAmtID.innerHTML = `
<h4>${ShovelAmtElem} Cheese Shovels</h4>
`
pickaxeAmtID.innerHTML = `
<h4>${PickAmtElem} Cheese Pickaxes</h4>
`
cartAmtID.innerHTML = `
<h4>${CartAmtElem} Cheese Carts</h4>
`
wagonAmtID.innerHTML = `
<h4>${WagonAmtElem} Cheese Wagons</h4>
`
trainAmtID.innerHTML = `
<h4>${TrainAmtElem} Cheese Trains</h4>
`
}

setInterval(function(){
  totalCheese += Math.floor(CartAmtElem * CartIncElem);
  totalCheese += Math.floor(WagonAmtElem * WagonIncElem);
  totalCheese += Math.floor(TrainAmtElem * TrainIncElem);
  draw()
   }, 3000);
   
draw();