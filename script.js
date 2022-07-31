// global access to all inputs: bill input, tip input, number of people div, and per person total div
let billTotalInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
let numberOfPeople = document.getElementById("numberOfPeople")
let perPersonTotal = document.getElementById("perPersonTotal")

// Get number of people from number of people div
let numberOfPeopleAmount = Number(numberOfPeople.innerText)

// Function calculating the total bill per person
const calculateBill = () => {
    // getting the bill amount input
    const bill = Number(billTotalInput.value)
  
    // getting the tip amount and converting to percentage
    const tip = Number(tipInput.value) / 100

    // calculating the total amount of money to pay
    total = (bill * tip) + bill

    // calculating payment per person
    perPersonPayment = Number(total) / Number(numberOfPeople.innerText)
    //rounding
    perPersonPayment = perPersonPayment.toFixed(2)
    // updating the DOM
    perPersonTotal.innerText = `$${perPersonPayment.toLocaleString("da-DK")}` //toLocaleString doesn't work for some reason
  }
  
  const increasePeople = () => {
    numberOfPeopleAmount++

    // updating DOM
    numberOfPeople.innerText = numberOfPeopleAmount
  
    // calculating the new amount per person and setting it
    perPersonPayment = Number(total) / Number(numberOfPeople.innerText)
    perPersonPayment = perPersonPayment.toFixed(2)
    perPersonTotal.innerText = `$${perPersonPayment.toLocaleString("da-DK")}`
  }
  
  const decreasePeople = () => {
    // amount can't be under 1
    if(numberOfPeopleAmount <= 1) return

    numberOfPeopleAmount--
  
    // updating the DOM
    numberOfPeople.innerText = numberOfPeopleAmount
  
    // calculating the new bill and setting it in the DOM
    perPersonPayment = Number(total) / Number(numberOfPeople.innerText)
    perPersonPayment = perPersonPayment.toFixed(2)
    perPersonTotal.innerText = `$${perPersonPayment.toLocaleString("da-DK")}`
  }