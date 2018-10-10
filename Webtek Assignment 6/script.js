
let income = document.getElementById("income")
let wealth = document.getElementById("wealth")
let tax = document.getElementById("tax")

function taxCalc(){ 

    tax.value = (0.35 * income.value) + (0.25 * wealth.value)

}







