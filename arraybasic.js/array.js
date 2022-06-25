//Bài 1 
var arr1 = [1, 2, 3, 4, 5]
console.log([arr1[4], arr1[3], arr1[2], arr1[1], arr1[0]])
//Kết quả: [5, 4, 3, 2, 1]



//Bài 2
var arr2 = [["a", "b"], ["c", "d"], ["e", "f"]]
console.log(arr2.flat())

//Kết quả: ['a', 'b', 'c', 'd', 'e', 'f']



//Bài 3
var arr3 = [1, 4, 90, 5, 6, 33, 2, 3, 51]
var arr3 = arr3.filter(isBigEnough)
function isBigEnough(value) {
  return value > 5
}
arr3.sort(function (a, b) { return b - a });
console.log(arr3)
//Kết quả: [90, 51, 33, 6]



//Bài 4
var arr4 = [1, 4, 90, 5, 6, 33, 2, 3, 51]
var total1 = arr4.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(total1)
//Kết quả: 195



//Bài 5
var arr5 = [5, 8, 3, 12, 66, 2]
var length = arr5.length
for (let i = 0; i < length; i++) {
  arr5[i] += 5
}
console.log(arr5)
//Kết quả: [10, 13 , 8, 17, 71, 7]



//Bài 6
var arr6 = [5, 8, 3, 12, 66, 2]
var filtered = arr6.filter(chiahet2)
function chiahet2(value) {
  return value % 2 == 0
}
var total2 = filtered.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(total2)
//Kết quả: 88



//Bài 7
var arr7 = ["avengers", "captain america", "ironman", "black panther"]
Array.prototype.myUcase = function() {
  for (let i = 0; i < arr7.length; i++) {
      arr7[i] = arr7[i].toUpperCase();
  }
};
arr7.myUcase()
console.log(arr7)
//Kết quả: ["AVENGERS", "CAPTAIN AMERICA", "IRONMAN", "BLACK PANTHER"]



//Bài 8
var arr8 = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"]
 var replaced = arr8.map(function(iteam)
 {
if (iteam.length > 3){
   iteam=1
}
else if (iteam.length === 3){
   iteam = 0
}
if (iteam.length < 3){
   iteam = -1
}
return iteam
 })
console.log(replaced)
//Kết quả: [1, 0, 1, -1, 1, 0]