const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const paraEl = document.getElementById('overall');

function displayBMI(){
    const weight = weightEl.value;
    const heightcm = heightEl.value;
    const height = heightcm/100;
    const bmi = weight/Math.pow(height,2);
    const bmirounded = Math.round(bmi, 2);
    if (bmi<18.4){
        paraEl.innerText=`${bmirounded}: You are underweight.`;
    }
    else if (bmi>=18.5 && bmi<24.9){
        paraEl.innerText=`${bmirounded}: You are normal.`;
    }
    else if (bmi>=25 && bmi<39.9){
        paraEl.innerText=`${bmirounded}: You are overweight.`;
    }
    else{
        paraEl.innerText=`${bmirounded}: You are obese.`;
    }
}
