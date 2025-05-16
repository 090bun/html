
// document.write("<table>")

// for( let i = 1 ; i<=9 ; i++){
//     document.write("<tr>")
//     for( let j = 1 ; j<=9 ; j++){
//         document.write("<td>")
//         document.write(i+ "X" + j + "=" + i*j + "" )
//         document.write("</td>")
//     }
//     document.write("</tr>")
    
// }
// document.write("</table>")

// ------------
// ------------
// ------------
/* <table>
    <tr>
        <tb></tb>
    </tr>
</table> */
// ------------
// 表格

// document.write("<table>")
// for (let j = 1; j <= 9; j++) {
//     document.write("<tr>")
//     document.write(i + "X" + j + "="  i * j)

//     for (let j = 1; j <= 9; j++) {
//         document.write("<td>" + i + "X" + j + "=" + i * j + "</td>")
//     }
//     document.write("</tr>")
// }
// document.write("</table>")


// ------------
// ------------
// ------------
// 使用 for 迴圈將 1~100 加總

// let add = 0;
// for (let i =0 ;i<101 ; i++){
//     add+=i;
// }
// console.log(add)

// ------------
// ------------
// 使用 while 讓使用者持續輸入成績，直到輸入 -1 結束並計算平均

// let inp = "" ;
// let add = 0;
// while (inp !== -1){
//     inp = parseInt(prompt("輸入數字:"))
//     add += inp
// }
// console.log(add)


// ------------
// ------------
// 使用巢狀迴圈製作 5x5 數字方格（輸出為 5 行，每行 5 個數字）
document.write("<table>")
    document.write("<tr>")
    for( let b = 1 ; b<5 ; b++){
document.write("</tr>")
document.write("<td>" +b +"</td>")
        for (let a = 1 ; a<5 ;a++){
        document.write("<td>" +a +"</td>")
        }
    }
    document.write("</tr>")
document.write("</table>")



// ------------
// ------------
// 猜密碼遊戲，使用者有 3 次機會，輸入正確後停止，否則提示剩餘次數。
let con = 0;
pas = "";
if (con=3)(
    
)