function ChangeMoney(){
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;
    if (FromC == "VND" && To == "USD"){
        Result = Amount / 23000+("$");
    }else if (FromC == "USD" && To == "VND"){
        Result = Amount * 23000 +"VND";
    }else if (FromC == "VND"){
     Result = Amount + "VND";
    }else{
        Result = Amount + "$"
    }
    document.getElementById("Result").innerHTML = Result;
}