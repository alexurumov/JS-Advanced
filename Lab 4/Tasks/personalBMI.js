function personalBmi(name, age, weight, height) {
    
    const person = {
        name: name, 
        personalInfo: {
            age: age, 
            weight: weight, 
            height: height
        }, 
    }

    person.BMI = Math.round(person.personalInfo.weight / Math.pow(person.personalInfo.height / 100, 2));
    
    function determineStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        }
        if (bmi < 25) {
            return 'normal';
        }
        if (bmi < 30) {
            return 'overweight';
        }
        return 'obese';
    }
    
    person.status = determineStatus(person.BMI);

    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(personalBmi('Alex', 27, 115, 195  ));

