
class TestDrive {
    constructor(name, email, tel,gender,vehicles){
        this.name = name;
        this.email=email;
        this.email= tel;
        this.gender=gender;
        this.vehicles=vehicles;
    }
}
class UI {

    // static displayTestDrive(){
    //     const books = Store.getBooks();

    //     books.forEach((book) => UI.addBookToList(book));
    // }
    static showAlert (message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#request');
        container.insertBefore(div, form);
       // vanish in 5seconds
        setTimeout(() => document.querySelector('.alert').remove(),5000);
    
    }
        



    static clearFields(){
        document.querySelector('#username').value = '';
        document.querySelector('#user-email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#gender').value = '';
        document.querySelector('#vehicles').value = '';
    }
}

class DriveList {
    static getTestDrive() {
        let testDrive;
        if(localStorage.getItem('testDrive')=== null){
            testDrive = [];
        } else {
            testDrive = JSON.parse(localStorage.getItem('testDrive'))
        }

        return testDrive;
    }

    static addTestDrive(testDrive) {
        // const testDrive = DriveList.getTestDrive();
        testDrive.push(testDrive);
        localStorage.setItem('testDrive'.JSON.stringify(testDrive));
    }
}

document.querySelector('#request').addEventListener('submit', (e) => {
    e.preventDefault();

     //get form values
    const name = document.querySelector('#username').value = '';
    const email = document.querySelector('#user-email').value = '';
    const tel = document.querySelector('#phone').value = '';
    const gender = document.querySelector('#gender').value = '';
    const vehicle = document.querySelector('#vehicles').value = '';

    //validate
    if(name === ''|| email === '' ||tel === '' || gender ==='' || vehicle=== '') {
        UI.showAlert( 'Please fill in all fields', 'danger');
    } else {

        //instantiate testDrive
        const testDrive = new testDrive(name, email, tel, gender, vehicle);
        //add testDrive to localStorage
        DriveList.addTestDrive(testDrive);
        //show success message
        UI.showAlert('Request added', 'success');
        // clear fields
        UI.clearFields();
    }

    


})
























































































































































 