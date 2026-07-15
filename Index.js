function lc() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var refer = name + " " + "+" + " " + lname;
    var love = Math.random();
    love = Math.floor(love * 100) + "%";

    if (name == "") {
        document.getElementById("error").innerHTML = "Pleace enter Your Name !";
    }
    else if (name.length <= 2) {
        document.getElementById("error").innerHTML = "Your Name is too short !";
    }
    else if (!isNaN(name)) {
        document.getElementById("error").innerHTML = "Your Name is not Correct !";
    }
    else if (lname == "") {
        document.getElementById("error").innerHTML = "Pleace enter Love Name !";
    }
    else if (lname.length <= 2) {
        document.getElementById("error").innerHTML = "Love Name is too short !";
    }
    else if (!isNaN(lname)) {
        document.getElementById("error").innerHTML = "Love Name is not Correct !";
    }
    else {
        document.getElementById("result").value = love;
        document.getElementById("error").innerHTML = "Thanks for using me."
        document.getElementById("reference").innerHTML = refer;
        var em = "";
        document.getElementById("name").value = em;
        var em1 = "";
        document.getElementById("lname").value = em1;
    }
}