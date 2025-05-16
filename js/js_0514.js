// 1. 宣告一個名為 `username` 的變數，並用 `prompt()` 讓使用者輸入名字。
// 2. 用 `alert()` 顯示歡迎語句，例如：「Hello, 小明！」
// 3. 請寫一段程式，計算使用者輸入的兩個數字加總後顯示在 `console.log`。
// 4. 試著使用 `typeof` 顯示每個變數的型別。

// let username = prompt("輸入名字:")

// alert(`hello ${username}`)
// let num1 = prompt(parseInt("數字1:"))
// let num2 = prompt(parseInt("數字2:"))
// alert((num1+num2))

// ------

// 請讓使用者輸入 0~100 的分數，顯示對應的等級（使用 if）：

let num = prompt("輸入數字:")
// // 要是數字 1~100
let number = parseInt(num)
console.log(number)
if (typeof(number) != Number) {  //類型
    console.log ("叫你打數字!")
}
else if(number >=100 || number<0){
    console.log("範圍輸入錯誤")
}else {
let calss = number / 10 ;
switch(number){
    case 10:
    case 9:
    console.log("A");
    break;
    case 8:
    console.log("B");
    break;
    case 7:
    console.log("C");
    break;
    case 6:
    console.log("D");
    break;
    default:
    console.log("F");
}
}

