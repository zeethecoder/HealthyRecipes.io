// Quick Active tab 
const btnItem = document.querySelectorAll('.tab-btn');

btnItem.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    item.classList.add('active');
  });
});


// Dark Mode