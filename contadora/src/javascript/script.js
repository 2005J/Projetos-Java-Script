const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
let count = 0;
let intervalId = 0;


const updateValue = () => {
    value.innerHTML = count; 
};


plusButton.addEventListener('click', ()=>{
    intervalId = setInterval(() => {
            count +=1;
            updateValue();
    }, 100);
});

minusButton.addEventListener('click', ()=>{
    intervalId = setInterval(() => {
            count -=1;
            updateValue();
    }, 100);
});

resetButton.addEventListener('click', ()=> {
       count = 0;
       updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));

console.log(count)

