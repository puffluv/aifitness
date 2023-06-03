const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.textContent = 'Заполните Ваш рост и вес.'

        setTimeout(() => {
           calculateMessage.textContent = '' 
        }, 3000);
    } else {
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg/(cm*cm))

        if (bmi < 18.5) {
            calculateMessage.textContent = `Ваш индекс массы тела -  ${bmi} (ниже нормы).`
        } else if(bmi < 25) {
            calculateMessage.textContent = `Ваш индекс массы тела -  ${bmi} (норма).`
        } else{
            calculateMessage.textContent = `Ваш индекс массы тела -  ${bmi} (выше нормы).`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(() => {
           calculateMessage.textContent = ''
        }, 5000);
    }
}

calculateForm.addEventListener('submit', calculateBmi)
