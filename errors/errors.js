window.onload = promptValue;

function promptValue() {
    let ans = prompt("Input a positive number", "");
    let msg;
    try{
        if(!ans || isNaN(ans) || ans < 0) {
            throw new Error("Given value is not a positive number");
        }
        msg = "You provided: " + ans;

    } catch (errMsg) {
        msg = errMsg;
    }

    document.getElementById("msg").innerText = msg;
}
