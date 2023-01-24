/*When the form is submitted we wil save the input as variable*/
function myFunction() {
    let htmlnum = document.getElementById('numInput').value;


    // If the variable is not a number we want to display an alert.
    if (isNaN(htmlnum)) {
        alert(htmlnum + "is not a number ! <br>");
    } 
    //If variable is a number we want to know if the number is even or odd.
    /*Checking if number is even*/
    if(htmlnum % 2 == 0){
        document.write(htmlnum + " is an even number.")
    }
    //if the number is not even
    else{
        document.write(htmlnum + " is an odd number.")
    }























} 
