/* Daman Sharma 
   ICS3UR-A 
   January 13, 2016 
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

function getInfo() {
    'use strict'
    temp = localStorage.getItem("text");
    newObject = JSON.parse(temp);
    
    temp2 = localStorage.getItem("viewer");
    newObject2 = JSON.parse(temp2);
    
    
    for (var i = 0; i < newObject.length; i++) {
        
// This if statement displays important announcements regardless of student preferences, displays all announcements if the user did not select anything and displays certain announcements based on student preferences.      
    if (newObject[i].importantAnnouncement == "Yes" || newObject2[0].viewerCategory == null && newObject2[0].viewerGender == null && newObject2[0].viewerGrade == null || newObject2[0].viewerGender == newObject[i].gender && newObject2[0].viewerGrade == newObject[i].grade && newObject2[0].viewerCategory[0] == newObject[i].category && newObject2[0].viewerGrade == newObject[i].grade && newObject2[0].viewerGender == newObject[i].gender || newObject2[0].viewerCategory[1] == newObject[i].category && newObject2[0].viewerGrade == newObject[i].grade && newObject2[0].viewerGender == newObject[i].gender){
       announceNotice       += newObject[i].notice + "<br>";
       announceClub         += newObject[i].clubName + "<br>";
       announceCategory     += newObject[i].category + "<br>";
       announceTags         += newObject[i].tags + "<br>";
       announceGender       += newObject[i].gender + "<br>";
       announceGrade        += newObject[i].grade + "<br>";
       announceImportant    += newObject[i].importantAnnouncement + "<br>";
        
       $("#noticeUser").html(announceNotice);
       $("#nameCategory").html(announceCategory);
       $("#nameTag").html(announceTags); 
       $("#nameClub").html(announceClub);
       $("#nameGrade").html(announceGrade);
       $("#nameGender").html(announceGender);
       $("#importantAnnounced").html(announceImportant);    
    }         
        
}
}
