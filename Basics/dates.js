


// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth(); // Months are 0-indexed (0-Jan, 1-Feb, ..., 11-Dec)
// let day = date.getDate();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();

// console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Milliseconds: ${milliseconds}`);
// Year: 2024, Month: 1, Day: 2, Hours: 15, Minutes: 0, Seconds: 33, Milliseconds: 116






// let date = new Date();

// // Using toLocaleString
// console.log(date.toLocaleString());

// // Using Intl.DateTimeFormat
// let dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
// console.log(dateFormatter.format(date));

// // 2/2/2024, 3:02:36 PM
// // Friday, February 2, 2024




let date = new Date();

// Adding 2 days
// date.setDate(date.getDate() + 2);

// // Subtracting 1 month
// date.setMonth(date.getMonth() - 1);

// console.log(date);

// 2024-01-04T15:04:35.684Z


let date1 = new Date(2022, 0, 1);
let date2 = new Date(2023, 0, 1);

if (date1 < date2) {
    console.log("date1 is earlier than date2");
} else if (date1 > date2) {
    console.log("date1 is later than date2");
} else {
    console.log("Both dates are equal");
}

//date1 is earlier than date2








