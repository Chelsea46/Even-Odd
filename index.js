const btn = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const box = document.getElementsByClassName('box')
const three = document.getElementById('three');
const five = document.getElementById('five');
const fifteen = document.getElementById('fifteen');
let counter = 0;

btn.addEventListener('click', function(){
  counter ++
  btn.innerHTML = counter
  const div = document.createElement('div')
  div.classList.add('box')
  div.innerText = counter
  
  if(counter % 2 == 0 && counter % 15 !=0 && counter % 3 !=0 && counter % 5 !=0){
    even.appendChild(div)
  } else if (counter % 2 === 1  && counter % 15 !=0 && counter % 3 !=0 && counter % 5 !=0){
    odd.appendChild(div)
  } else if (counter % 3 === 0 && counter % 15 !=0){
    three.appendChild(div)
  } else if (counter % 5 ===0 && counter % 15 !=0){
    five.appendChild(div)
  } else if (counter % 15 === 0){
    fifteen.appendChild(div)
  }
});

document.addEventListener("click", function(e){
  const target = e.target.closest(".box")
  if(target){
   target.remove()
  }
});
