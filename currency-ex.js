function changeMoney() {
    let amount = document.getElementById("amount").value;
    let form = document.getElementById("form").value;
    let to = document.getElementById("to").value;
    let result;
    if (form === "dong" && to === "usd") {
        amount = amount * 23000;
        result = "result: " + amount + "$";
    } else if (form === "usd" && to === "dong") {
        amount = amount / 23000;
        result = "result: " + amount + "dong";
    }
    if (form === to) {
        amount = amount * 1;
        result = "result: " + amount;
    }
    document.getElementById("result").innerHTML = result
}

