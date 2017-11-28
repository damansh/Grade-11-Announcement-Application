/* Daman Sharma 
   ICS3UR-A 
   January 4, 2016 
*/
var newObject;
var newObject2;

var temp;
var temp2;

var announceNotice = "";
var announceClub = "";
var announceCategory = "";
var announceTags = "";  
var announceGender = "";
var announceGrade  = "";
var studentCategory = "";
var announceImportant = "";

// This is a for loop within a function which retrieves the data (announcements) from the local storage and displays it onto the Home page. 

function allAnnouncements() {
      'use strict'
    temp = localStorage.getItem("text");
    newObject = JSON.parse(temp);
    
    temp2 = localStorage.getItem("viewer");
    newObject2 = JSON.parse(temp2);
    
    for (var b; b < newObject.length; b++){
       announceNotice       += newObject[b].notice + "<br>";
       announceClub         += newObject[b].clubName + "<br>";
       announceCategory     += newObject[b].category + "<br>";
       announceTags         += newObject[b].tags + "<br>";
       announceGender       += newObject[b].gender + "<br>";
       announceGrade        += newObject[b].grade + "<br>";
       announceImportant    += newObject[b].importantAnnouncement + "<br>";
        
       $("#noticeUser").html(announceNotice);
       $("#nameCategory").html(announceCategory);
       $("#nameTag").html(announceTags); 
       $("#nameClub").html(announceClub);
       $("#nameGrade").html(announceGrade);
       $("#nameGender").html(announceGender);
       $("#importantAnnounced").html(announceImportant);  
    }
}
