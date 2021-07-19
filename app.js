// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen(dollar)
{

return (dollar*oneEuroIs["JPY"])/oneEuroIs["USD"];

}

function fromEuroToDollar (euro){

    return euro*oneEuroIs["USD"];

}



function fromYanToPound(yen){

    return  (yen*oneEuroIs["GBP"])/oneEuroIs["JPY"];

}


module.exports = { fromEuroToDollar,fromYanToPound, fromDollarToYen  };