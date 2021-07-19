test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar,fromYanToPound, fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
 
   expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)


   //yen to pound
const yen = fromYanToPound(1000)

const triste = (1000*0.8)/127.9; 

expect(fromYanToPound(1000)).toBe(6.254886630179827);




const dollarYen = fromDollarToYen(200)

const happy = (200*127.9)/1.2; 

expect(fromDollarToYen(200)).toBe(21316.666666666668);

})