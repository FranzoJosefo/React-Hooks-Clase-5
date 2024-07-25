//Objeto que va a tener info sobre el cambio que yo quiero que se haga. 
//Le indico a un objeto con 2 properties, que quiero que haga, si te llaman AGREGA PLATA, COMO? CONTALA. 
export const depositMoney = (moneyAmmount) => {
    return {
        type: "ADD_MONEY",
        payload: moneyAmmount
    }
}

// function depositMoney(count) {
//     return {

//     }
// }
