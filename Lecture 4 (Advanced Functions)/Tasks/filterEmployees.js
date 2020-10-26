function filter(data, criteria) {
    let employees = JSON.parse(data);
    
    let criteriaField = criteria.split('-')[0];
    let criteriaProp = criteria.split('-')[1];

    switch (criteriaField) {
        case 'id': employees = employees.filter(x => x['id'] === criteriaProp); break;
        case 'first_name': employees = employees.filter(x => x['first_name'] === criteriaProp); break;
        case 'last_name': employees = employees.filter(x => x['last_name'] === criteriaProp); break;
        case 'email': employees = employees.filter(x => x['email'] === criteriaProp); break;
        case 'gender': employees = employees.filter(x => x['gender'] === criteriaProp); break;
    }

    let counter = 0;
    employees.forEach(employee => {
        console.log(`${counter++}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
    });
}

filter(`[{ 

    "id": "1", 

    "first_name": "Kaylee", 

    "last_name": "Johnson", 

    "email": "k0@cnn.com", 

    "gender": "Female" 

  }, { 

    "id": "2", 

    "first_name": "Kizzee", 

    "last_name": "Johnson", 

    "email": "kjost1@forbes.com", 

    "gender": "Female" 

  }, { 

    "id": "3", 

    "first_name": "Evanne", 

    "last_name": "Maldin", 

    "email": "emaldin2@hostgator.com", 

    "gender": "Male" 

  }, { 

    "id": "4", 

    "first_name": "Evanne", 

    "last_name": "Johnson", 

    "email": "ev2@hostgator.com", 

    "gender": "Male" 

  }]`, 

 'last_name-Johnson' 

 );

