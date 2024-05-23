const form = document.querySelector('form')

addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `Please enter valid height`;
    }
    else if (weight === '' || isNaN(weight) || weight < 0) {
        results.innerHTML = `Please enter valid weight`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
        const comment = document.querySelector('#comment');
        if (bmi < 18.6) {
            comment.innerHTML = `You are underweight`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            comment.innerHTML = `You are normal`;
        }
        else if (bmi > 24.9) {
            comment.innerHTML = `You are overweight`;
        }
    }
})