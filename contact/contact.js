document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", onSubmit);
    // document.getElementById("editButton").addEventListener("click", editData);

    if (localStorage.getItem("data")) {
        displayData();
    }
});

function onSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const data = { name: name, email: email, phone: phone, address: address };
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";

    const mailtoLink = `mailto:pruthvirajyadav703@gmail.com?subject=Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AAddress: ${encodeURIComponent(address)}`;
    const successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = `<br/> Thank you for submitting your information.  <br/> <a href="${mailtoLink}">Send Email</a> <br/>`;

    setTimeout(() => {
        displayData();
    }, 3000);
}

function displayData() {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        document.querySelector(".name").innerHTML = `Name: ${data.name}`;
        document.querySelector(".email").innerHTML = `Email: ${data.email}`;
        document.querySelector(".phone").innerHTML = `Phone: ${data.phone}`;
        document.querySelector(".address").innerHTML = `Address: ${data.address}`;

        document.getElementById("userInfo").style.display = "block";
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("successMessage").style.display = "none";
    }
}

// function editData() {
//     const data = JSON.parse(localStorage.getItem("data"));
//     if (data) {
//         document.getElementById("name").value = data.name;
//         document.getElementById("email").value = data.email;
//         document.getElementById("phone").value = data.phone;
//         document.getElementById("address").value = data.address;

//         document.getElementById("userInfo").style.display = "none";
//         document.getElementById("contactForm").style.display = "block";
//         document.getElementById("successMessage").style.display = "none";
//     }
// }