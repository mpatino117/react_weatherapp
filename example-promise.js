// // function getTempCallback(location, callback) {
// //     callback("undefined");

// // }


// // getTempCallback("Philadelphia", function(err, temp) {
// //     if (err) {
// //         console.log('Error', err);
// //     } else {
// //         console.log('success', temp);
// //     }
// // });


// function getTempCallback() {
//     return new Promise(function(resolve, reject) {
//         resolve(79);
//         reject("Not Found");
//     });
// }

// getTempCallback("Philadelphia").then(function(temp){
// 	console.log("success", temp);
// }, function(err){
// 	console.log("failed", err);
// });

function addNumber(a, b) {
    return new Promise(function(resolve, reject) {
        if (isNaN(a, b)) {
            reject("Not a Number");
        } else {
            resolve(a + b);

        }
    });
}

addNumber("dog").then(function(response) {
    console.log("Success", response);
}, function(error) {
    console.log("Error", error);
});


// addNumber(1, 2).then(function()