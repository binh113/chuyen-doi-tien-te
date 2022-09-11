function changeMoney() {
    let amount = document.getElementById("amount").value;
    let form = document.getElementById("form").value;
    let to = document.getElementById("to").value;
    let result;
    if (form === "dong" && to === "usd") {
        amount = parseInt(amount) * 23000;
        result = "result: " + amount + "$";
    } else if (form === "usd" && to === "dong") {
        amount = parseInt(amount) / 23000;
        result = "result: " + amount + "usd";
    } else {
        result = "result: " + parseInt(amount) + form;
    }
    document.getElementById("result").innerHTML = result
}

