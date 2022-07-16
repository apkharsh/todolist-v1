module.exports.getDate = getDate;

function getDate(){
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    return today.toLocaleDateString('en-US', options);

}
module.exports.getDay = getDay;

function getDay(){
    let today = new Date();
    let options = {
        weekday: 'long',
    };
    return today.toLocaleDateString('en-US', options);
}
// function getDate() {
//     var today = new Date();
//     var currentDay = today.getDay();
//     var day = "";
//     switch (currentDay) {
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         default:
//             day = "Invalid Day";
//     }
//     return day;
// }
