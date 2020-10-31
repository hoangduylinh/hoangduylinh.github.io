// day la chu thich 1 dong
/* day la chu thich tren nhieu dong*/

/* day la kieu du lieu chuoi, noi dung duoc dat trong dau ngoac don hoac kep - string*/

//  

// kieu du lieu so - number

// var x = 5
// var y = 5.5

//kieu du lieu biilean(dung, sai)

// var check = true
// var uncheck= false

// block scope

// var newname = 'anna'
// function getName(){
//     newname='Linh'
// }
// console.log(newname)

// var co hoisted (luon hien thi len dau)
// let k co hoisted

// viết hàm tính tổng 2 số:

// function sumup (x,y) {
// console.log(x+y)
// alert(`tong cua 2 so la ${x} va ${y} la: ${x+y}`)
// }
// sumup (8,6)

// function sendEmail (from, message = "khong co noi dung"){
//     alert (from+","+ message)
// sendEmail("robin")
// };
// function group (a,b,name) {
//     alert(a+b+name)
// }
// group (1,22, john)

// function group (a,b,c){
//     alert(a+b+c)
// }
// group("$",4,5)

// function group (a,b) {
//     alert(a+b)
// }
// group(typeof(7),1);

// document.write('hello cac ban');
// document.write('<br/> xin chao');

// document.writeln('hu hu hu');

// // tính bình phương của 1 số
// function squareOfNumber(x){
//     Math.pow(x,2);
// }

// //tinh binh phuong cua tong (3a+2b-c)
// function binhphuong(a,b,c){
//    let tong=3*a + 2*b -c;
//    console.log ('ket qua cua phep toan 3*${a}+2*{b}-c la $math.pow(`3*${a}+2*{b}`-c,2)



let person = {
    name: "linh",
    age: 30,
    run: () => { console.log('run') },
}
person["adress"] = "Viet nam"
for (const key in person) {
    console.log(person[key]);
}


console.log(person.name + "abc")

let numbers = [1, 2, 3, 4, 5, 6, 7]
// truy cập phần tử mảng theo index
numbers[1]
console.log(numbers.length)

numbers.push(8)
numbers.push(9)

numbers.unshift('0') //them phan tu vao dau ma
numbers.shift //xoa phan tu dau ma

console.log("index of value '3'", numbers.indexOf('3'))

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}
// for (let item of checks){
//     console.log(item)
// }

function tinhTong(arrs) {
    let tong = 0;
    for (let i of arrs) {
        console.log(i)
        tong = tong + i;
    }
    return tong;

}

console.log("abc", tinhTong([2, 4, 1]))

function binhPhuong(arrs) {
    let tong = 0;
    for (let i of arrs) {
        tong = tong + Math.pow(i, 2);
    }
    return tong;
}
console.log(binhPhuong([2, 4, 1]))

const mangSo = [2, 3, 4, 5];
const doubles = mangSo.map((number) => number * 2);

const So = [4, 5, 6, 7];
const sodu = So.map((number) => number % 2);

function timSoDu(arrs) {
    let newArrs = [];
    newArrs = arrs.map((number) => (number % 2));
    return newArrs;
}

function timSoChan(arrs) {
    let soChan = [];
    soChan = arrs.filter((number) => (number % 2 == 0));
    return soChan;
}

function timTen(arrs) {
    let tenH = [];
    tenH = arrs.filter(number => number.substring(0, 1) == "h" || number.substring(0, 1) == "H")
    return tenH
}

function timTen(arrs, kyTu) {
    let tenH = [];
    tenH = arrs.filter(number => number.substring(0, 1) == "h" || number.substring(0, 1) == "kyTu")
    return tenH
}

/* if (điều kiện){
    nếu điều kiện đúng viết ở đây
}
else{
    nếu đk sai viết ở đây
}
}*/
function timSoNguyen(a) {
    if (a > 0) {
        return ("a la so duong ");
    }
    else if (a = 0) {
        return ("a = 0");
    } else {
        return ("a la so am");
    }
}

function tinhDiemTrungBinh (toan, ly, hoa){
    if (toan < 0 || toan > 10||  ly < 0 || ly > 10 || hoa < 0 || hoa > 10){
        return " diem nhap vao khong hop le"
    }
    let diemTB =(toan+ly+hoa)/3;

    if (diemTB < 3){
        return ("yeu")
    }
    else if ( diemTB >=3 && diemTB < 6.5){
        return (" trung binh ") 
    }
    else if (diemTB >= 6.5 && diemTB < 8){
        return ( " kha")
    }
    else if(diemTB >= 8 && diemTB == 10) {
        return ("gioi")
    }
    else {
        return 
    }
}
function getDay(day){
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      return day
}