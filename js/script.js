// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-assignment-5/sw.js", {
    scope: "/ICS2O-assignment-5/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num = parseInt(document.getElementById("num").value)
  const exp = parseInt(document.getElementById("exponent").value)

  let answer = 1
  let count = 0

  if (exp > 0) {
    while (count < exp || count == exp) {
      answer *= num
      count++
    }
  } else if (exp < 0) {
    while (count > exp) {
      answer /= num

      count--
    }
  } else {
    answer = 1
  }

  document.getElementById("answer").innerHTML = "equals to: " + answer
}
