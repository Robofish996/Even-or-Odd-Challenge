/*When the form is submitted we wil save the input as variable*/
function myFunction() {
    let htmlnum = document.getElementById('numInput').value;


    /*by using isNaN (is Not a Number) we will define if input is a number or not*/
    if (isNaN(htmlnum)) {
        alert(htmlnum + "is not a number ! <br>");
    } else {
        document.write(htmlnum + "is a number ! <br>")
    }























} 
