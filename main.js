function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiResult = bmi.toFixed(2);

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('bmiResult').innerText = `Your BMI: ${bmiResult}`;
        document.getElementById('bmiCategory').innerText = `Category: ${category}`;
    } else {
        alert("Please enter valid values for weight and height.");
    }
}
