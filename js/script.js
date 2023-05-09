// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2023
// This file contains the JS functions for index.html

/*
* This function does multiploication using an old and simple method
*/


function calculate() {
  // Define variable
  let counter = 0
  let answer = 0

  // Get user unput
  const numberA = parseInt(document.getElementById("numberA"))
  const numberB = parseInt(document.getElementById("numberB"))

  // Perform multiplication
  while (counter < numberB) {
    answer += numberA
    // Add 1 to counter (for each loop performed)
    counter++
  }

  // Output answer
  document.getElementById("answer").innerHTML = "The answer is " + answer
}
