/*
Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, 
місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.
*/

const userInfo = {
    name: 'Jane',
    age: 25,
    city: 'Barcelona',
    hobbies: ['dancing', 'yoga', 'reading', 'piano'].join(', '),
    hasDog: true,
    hasCar: false,
    permissions: {
        adminPanel: true,
        managerPanel: false
    },

    displayInfo () {

        const message = `Info:   Name - ${this.name}
        Age - ${this.age}
        City - ${this.city}
        Hobbies - ${this.hobbies}
        Has Dog - ${this.hasDog}
        Has Car - ${this.hasCar}
        Admin Panel Access - ${this.permissions.adminPanel}
        Manager Panel Access - ${this.permissions.managerPanel}`;

        console.log(message);
    }
}
userInfo.displayInfo();