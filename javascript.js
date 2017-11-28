/* Daman Sharma 
   ICS3UR-A 
   January 13, 2016 
*/

// Javascript for the log-in page and the create an announcement page. 

var userName;
var userPassword;

// This function gets the value of "userName" from the HTML.
function getUser() {
    'use strict';
    userName = document.getElementById('userName').value;
    
}

// This function checks whether their is text in the username and password field and if both of the fields have text in them, then it stores the value of "userName" into the variable "userName" and then displays "Hello userName" underneath the log in field. 
function confirm() {
    if (document.getElementById('userName').value.length === 0) {
        alert("Student Number can't be blank");
    }
    else if (document.getElementById('userPassword').value.length === 0) {
        alert("Password can't be blank.");
    }
    else {
        userName = document.getElementById('userName').value;
        $('#output').html("Hello" + " " + userName);
    }
}

// This function retrieves the data from the following fields and saves it into the local storage. 
var announcement = [ ];
var index = 0;
function getData() {
    'use strict';
    announcement[index] = {
        userName: $('#userName').val(),
        clubName: $('#clubName').val(),
        category: $('#category').val(),
        notice: $('#notice').val(),
        tags: $('#tags').val(),
        gender: $('#gender').val(),
        grade: $('#grade').val(),
        importantAnnouncement: $('#importantAnnounce').val()
    };
    ++index;
    alert("Hello" + " " + $('#userName').val());
    var stringified = JSON.stringify(announcement);
    localStorage.setItem("text", stringified); 
    console.log(stringified);
}