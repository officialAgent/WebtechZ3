var outer = document.getElementById("outher");
document.getElementById('after2').style.display = 'none';
document.getElementById('after2').disabled = true;
var htmlCollection = document.getElementsByTagName('select');
document.getElementById("hiddentextarea").style.display = 'none';
var arr = Array.from(htmlCollection);
var arr2 = Array.from(htmlCollection);
var arr3 = Array.from(htmlCollection);


var htmlCollection2 = document.getElementsByClassName("after2text");
var arr4 = Array.from(htmlCollection2);
arr4.forEach(function (element) {
    element.disabled = true;
});

var selectedOption = document.getElementById("brand");


arr2.shift();
arr2.shift();
arr2.shift();
arr2.shift();
arr.shift();

arr.forEach(function (element) {
    element.style.display = 'none';
});
arr2.forEach(function (element) {
    element.style.display = 'none';
});
var demo = document.getElementById("AEG");
demo.style.display = 'inline';
document.getElementById(demo.value).style.display = 'inline';
demo.disabled = true;
document.getElementById(demo.value).disabled = true;

function show1() {
    document.getElementById('after').style.display = 'none';
    arr3.forEach(function (element) {
        element.disabled = true;
    });
    arr4.forEach(function (element) {
        element.disabled = true;
    });


}

function show2() {
    document.getElementById('after').style.display = 'block';
    arr3.forEach(function (element) {
        element.disabled = false;
    });
    arr.forEach(function (element) {
        element.style.display = 'none';
    });

    demo.style.display = 'inline';
    document.getElementById(demo.value).style.display = 'inline';
    demo.disabled = true;
    document.getElementById(demo.value).disabled = true;

}


outer.addEventListener("click", function () {
    if (document.getElementById("after2").style.display === 'block') {
        document.getElementById('after2').style.display = 'none';
        document.getElementById('after2').disabled = "true";


        arr3.forEach(function (element) {
            element.disabled = false;
        });
        arr.forEach(function (element) {
            element.disabled = true;
        });

        arr4.forEach(function (element) {
            element.disabled = true;
        });

    } else {
        document.getElementById("after2").style.display = 'block';
        arr3.forEach(function (element) {
            element.disabled = true;
        });
        arr4.forEach(function (element) {
            element.disabled = false;
        });

    }


})

function ValidateHNumber(){
  var number =  document.getElementById("hnumber");

    var letters = /^\s*\S+.*/;
    if (number.value.match(letters)) {
        document.getElementById(number.id).style.color = "#495057";
        document.getElementById(number.id).style.borderColor = "#495057";
        return true;
    } else {
        alert("Nespravne údaje")
        document.getElementById(number.id).style.color = "red";
        document.getElementById(number.id).style.borderColor ="red" ;
        return false;
    }

}


var send = document.getElementById("send");

function ValidateName(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(letters)) {
        document.getElementById(name.id).style.color = "#495057";
        document.getElementById(name.id).style.borderColor = "#495057";
        return true;
    } else {
        alert("Nespravne údaje")
        document.getElementById(name.id).style.color = "red";
        document.getElementById(name.id).style.borderColor ="red" ;
        return false;
    }


}

function ValidateCity(name) {
    var letters = /^[A-Za-z ]+$/;
    if (name.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(letters) ) {
        document.getElementById(name.id).style.color = "#495057";
        document.getElementById(name.id).style.borderColor = "#495057";
        return true;
    } else {
        alert("Nespravne údaje")
        document.getElementById(name.id).style.color = "red";
        document.getElementById(name.id).style.borderColor ="red" ;
        return false;
    }


}


function ValidateEmail() {
    var mail = document.getElementById("email");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {

        var length = mail.value.length;
        var num1 = 0;
        var point = 0;
        for (var i = 0; i < length; i++) {
            if (mail.value[i] === "@") {
                if (num1 < 3) {
                    alert("Email error!!");
                    document.getElementById(email.id).style.color = "red";
                    return false;
                }
                for (var j = num1; j < length; j++) {
                    if (mail.value[j] === ".") {
                        point = j + 1;

                    }
                }

            }
            num1++;

        }

        var end = length - point
        if (end < 2 || end > 4) {
            alert("Email error!!");
            document.getElementById(email.id).style.color = "red";
            document.getElementById(email.id).style.borderColor ="red" ;
            return false;
        }
        document.getElementById(mail.id).style.color = "#495057";
        document.getElementById(mail.id).style.borderColor = "#495057";
        return true;
    }
    alert("Email error!");
    document.getElementById(email.id).style.color = "red";
    document.getElementById(email.id).style.borderColor ="red" ;
    return false;
}


function ValidateAge() {
    var year = document.getElementById("date").value;
    var age = document.getElementById("old").value;
    var dateColor = document.getElementById("date");
    var ageColor = document.getElementById("old");
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var op = new Date(year);
    var y2 = op.getFullYear();
    var m2 = op.getMonth();
    var yt = y - y2;
    var ag = parseInt(age);
    var d2 = d.getDate();
    var d3 = op.getDate();


    if (age === "" || year === "") {
        ageColor.style.color = "red";
        dateColor.style.color = "red";
        ageColor.style.borderColor = "red";
        dateColor.style.borderColor = "red";
        return false;
    }
    if (y2 === "" || m2 === "" || d3 === "") {
        ageColor.style.color = "red";
        dateColor.style.color = "red";
        ageColor.style.borderColor = "red";
        dateColor.style.borderColor = "red";
        return false

    }


    if (age < 1) {
        alert("Dáutum narodenina a vek error");
        ageColor.style.color = "red";
        dateColor.style.color = "red";
        ageColor.style.borderColor = "red";
        dateColor.style.borderColor = "red";
        return false;
    }
    if (y === y2 || y2 > y) {
        alert("Dáutum narodenina a vek error");
        ageColor.style.color = "red";
        dateColor.style.color = "red";
        ageColor.style.borderColor = "red";
        dateColor.style.borderColor = "red";
        return false;
    }


    if (m < m2) {
        ag += 1;
    }

    if (m === m2 && d2 < d3) {
        ag += 1;
    }

    if (parseInt(yt) !== parseInt(ag)) {
        alert("Dáutum narodenina a vek error");
        ageColor.style.color = "red";
        dateColor.style.color = "red";
        ageColor.style.borderColor = "red";
        dateColor.style.borderColor = "red";
        return false;
    }


    ageColor.style.color = "#495057";
    dateColor.style.color = "#495057";
    ageColor.style.borderColor = "#495057";
    dateColor.style.borderColor = "#495057";
    return true


}


selectedOption.addEventListener("click", function () {



    arr.forEach(function (element) {
        element.style.display = 'none';
    });
    arr.forEach(function (element) {
        element.disabled = true;
    });
    document.getElementById(this.value).disabled = false;

    document.getElementById(this.value).style.display = 'inline';
    var selected2 = document.getElementById(this.value);
    selected2.disabled = false;
    document.getElementById(selected2.value).style.display = 'inline';
    document.getElementById(selected2.value).disabled = true;


    selected2.addEventListener("click", function () {


        arr2.forEach(function (element) {
            element.style.display = 'none';
        });
        arr2.forEach(function (element) {
            element.disabled = true;
        });
        document.getElementById(selected2.value).disabled = false;
        document.getElementById(selected2.value).style.display = 'inline';


    })

})




document.getElementById("first").addEventListener("blur", function () {
    ValidateName(this);
})
document.getElementById("last").addEventListener("blur", function () {
    ValidateName(this);
})
document.getElementById("city").addEventListener("blur", function () {
    ValidateCity(this);
})
document.getElementById("street").addEventListener("blur", function () {
   ValidateCity(this);
})

document.getElementById("hnumber").addEventListener("blur", function () {
ValidateHNumber();


})


document.getElementById("email").addEventListener("blur", function () {
    ValidateEmail();
})
document.getElementById("old").addEventListener("blur", function () {
    ValidateAge();

})
document.getElementById("date").addEventListener("blur", function () {
    ValidateAge();
})


send.addEventListener("click", function (event) {


    if (ValidateEmail()  && ValidateAge()  &&  ValidateName(document.getElementById("first")) &&  ValidateName(document.getElementById("last")) &&  ValidateCity(document.getElementById("city")) &&  ValidateCity(document.getElementById("street")) &&  ValidateHNumber()) {
        alert("Formulár bol odoslaný");
        return true;
    }
    else {
        alert("Formulár nie je možné odoslať");
        event.preventDefault();
        return false;

    }


})