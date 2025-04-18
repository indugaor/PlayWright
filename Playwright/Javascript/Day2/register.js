function getName() {
    return document.getElementById("name").value;
}

function getEmail() {
    return document.getElementById("email").value;
}

function getAge() {
    return document.getElementById("age").value;
}
function getRole() {
    return document.getElementById("role").value;
}

function getSalary() {
    return document.getElementById("salary").value;
}

function getPhoneNumber() {
    return document.getElementById("phone_number").value;
}


function validateName(name) {
    if(name.length >= 3) {
        return true;
    }
    return false;
}
function validateage(age) {
    if(age.length >18) {
        return true;
    }
    return false;
}


function displayErrorMsg(msg) {
    document.getElementById("vmsg").innerHTML = msg;
}

function submit() {
    // fetch name, email, age
    const name = getName();
    const email = getEmail();
    const age = getAge();
    const role = getRole();
    const salary = getSalary();
    const phone_number = getPhoneNumber();

    console.log(`${name}, ${email}, ${age}, ${role}, ${salary}, ${phone_number}`);

    const vname = validateName(name);
    if(!vname) {
        displayErrorMsg("Name should be having atleast 3 characters");
    }
    // Validate
}