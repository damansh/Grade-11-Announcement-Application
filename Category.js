/* Daman Sharma 
   ICS3UR-A 
   January 13, 2016 
*/

// This function is for retreiving the student's selection for category, gender and grade. 
var userCat = [ ];
var ndex = 0;
function getCategory() {
    'use strict'
    userCat[ndex] = {
        viewerCategory: $('#category').val(),
        viewerGender: $('#gender').val(),
        viewerGrade: $('#grade').val(),
    };
    ++ndex;
    var saveCategory = JSON.stringify(userCat);
    localStorage.setItem("viewer", saveCategory);
    window.open("Menu.html", "_self");
};