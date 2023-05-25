/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

const searchDelete = document.querySelector('.search-delete');

searchDelete.addEventListener('click', function ClearFields() {

    $searchField.value = "";
});

const input = document.querySelector('.search-field');
const popup = document.querySelector('.search-delete');

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});


const $searchField = document.querySelector("[data-search-field]");

const $searchBtn = document.querySelector("[data-search-btn]");


$searchBtn.addEventListener('click', function() {
    if($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});

