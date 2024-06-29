'use strict'

module.exports.generateRandomNumber = event =>{
    const randomNumber = parseInt(Math.random() *100)
    console.log('This is the random number ',randomNumber) 
    return randomNumber;
}