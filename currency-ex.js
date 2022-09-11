function changeMoney() {
    let amount = document.getElementById("amount").value;
    let form = document.getElementById("form").value;
    let to = document.getElementById("to").value;
    let result;
    if (form ==="dong" && to === "usd") {
        amount = amount * 23000;
        result = "result: " + amount + "$";
    } else if (form === "usd" && to === "dong") {
        amount = amount / 23000;
        result = "result: " + amount + "usd";
    } if (form === to) {
        result = "result: " + amount + form;
    }
    document.getElementById("result").innerHTML = result
}

