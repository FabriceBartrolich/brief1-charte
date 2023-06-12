const btnRandom = document.getElementById('button-random'); 

let myArray = ['Quentin', 'Alexandre', 'Gary', 'Melina', 'Samir', 'Nisrine', 'Samra', ];

btnRandom.addEventListener('click', () => {     
  RandArray(myArray)
 })  

function RandArray(array){     
    let rand = Math.random()*array.length | 0;     
    let rValue = array[rand];    
    console.log(rValue);     
    btnRandom.innerHTML = rValue; 
  
    setTimeout(reinitialise, 3000);
  
  }

  function reinitialise () {
    btnRandom.innerText="Random Apprenant"
  }





      
