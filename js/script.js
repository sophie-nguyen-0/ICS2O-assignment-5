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
  const num = parseInt(document.getElementById('num').value)
  const exp = parseInt(document.getElementById('exponent').value)

  const answer = 1

  for (let count = 0; count < exp || count == exp; count++) {
    answer *= num
  }

  document.getElementById('answer')
}
