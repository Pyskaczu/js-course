window.onload = showPopups;

function showPopups() {
    alert("This is alert popup");
    if(confirm("Shall prompt popup be displayed?")) {
        let message = prompt("Provide a greeting message", "Hello");
        alert(message);
    }
}