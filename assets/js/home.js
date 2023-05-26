/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";
// clear feild logic 
const searchDelete = document.querySelector('.search-delete');

searchDelete.addEventListener('click', function ClearFields() {

  $searchField.value = "";
  popup.style.display = 'none';
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

// clear feild logic end


// search bar query logic for search
const $searchField = document.querySelector("[data-search-field]");

const $searchBtn = document.querySelector("[data-search-btn]");


$searchBtn.addEventListener('click', function () {
  if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});


// when you press enter on key-board it will click for you
$searchField.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') $searchBtn.click();
});

// search bar navigation logic

const $tabBtns = document.querySelectorAll('.tab-btn');

const $tabPanels = document.querySelectorAll('.tab-panel');

let [$lastActiveTabPanel] = $tabPanels;
let [$lastActiveTabBtn] = $tabBtns;


addEventOnElements($tabBtns, 'click', function () {
  $lastActiveTabPanel.setAttribute("hidden", "");
  $lastActiveTabBtn.setAttribute("aria-selected", "false");
  $lastActiveTabBtn.setAttribute('tabindex', -1);

  const $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
  console.log($currentTabPanel)
  $currentTabPanel.removeAttribute('hidden');
  this.setAttribute('aria-selected', 'true');
  this.setAttribute('tabindex', 0);

  $lastActiveTabPanel = $currentTabPanel;
  $lastActiveTabBtn = this;
});



