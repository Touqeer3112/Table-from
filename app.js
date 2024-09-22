//  var userValue = prompt("Insert a number")

// for (var i = userValue; i> 1 ; i--) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(i + "x" + j + "=" + i*j);
//     }
// }


var userValue = prompt("Insert a number")

for (var i = 1;  i <=userValue ; userValue--) {
    for (var j = 1; j <= 10; j++) {
        document.write(userValue + "x" + j + "=" + userValue*j, "<br>");
    }
    document.write("<br>")
}

