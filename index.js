function discountCalc(price, discount){

    let total =price - (price*discount/100)
    return total
}

let discountValue = discountCalc(100, 10)
document.getElementById('text').innerHTML=discountValue

//console.log("hi, i'm index.js");
//let favoriteFood='Pizza';
