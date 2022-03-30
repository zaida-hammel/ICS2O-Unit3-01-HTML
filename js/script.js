// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const basea = parseInt(document.getElementById('base-a-of-trapezoid').value)
  const baseb = parseInt(document.getElementById('base-b-of-trapezoid').value)
  const height = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const area = height * [(basea + baseb) / 2]

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' mm²'
}
