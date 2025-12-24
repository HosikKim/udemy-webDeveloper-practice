// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
// }
// console.log(random)



// const dayOfWeek = prompt('ENTER A DAY!').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("I LOVE SATURDAY!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// } else {
//     console.log("MEH")
// }



// 0-5 - FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10
// const age = 89;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("Your ara a senior. You pay $10")
// }



const password = prompt("please enter a new password");

// 패스워드가 6자 이상인가
if (password.length >= 6) {
    // 공백을 포함하지 않는가
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain space")
    }
} else {
    console.log("PASSWORD TOO SHORT!!! Must be 6+ characters")
}