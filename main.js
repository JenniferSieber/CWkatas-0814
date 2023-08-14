// 6kyu, 7kyu, 8kyu
// KATA 1 6kyu
//  https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
const bingo = (ticket, win) => {
  let count = 0;
  ticket.forEach(game => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++;
    }
  });

  return (count >= win) ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));

// KATA 2 7kyu
//https://www.codewars.com/kata/59828f1954419acdff00002e/train/javascript
const finder = box => {
  let count = 0
  let index;
  box.forEach((arr, i) => {
    if (arr[0] === true) {
      count++;
      index = i;
    }  
  })
  return count > 0 ? index : "There is no golden ticket!";
}

console.log(finder([[false],[false],[false],[true],[false]])); 
console.log(finder([[false],[false],[false],[false],[false]])); 

// KATA 3 7kyu
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
const toNumberArray = stringArr => stringArr.map(Number);

console.log(toNumberArray(["1.1","2.2","3.3"]));


// KATA 4 8kyu
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
const digitize = num => num.toString().split('').reverse().map(Number);

console.log(digitize(35231));  
console.log(digitize(0));  

// KATA 5 7kyu
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
const last = x => x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

console.log(last('man i need a taxi up to ubud'));
console.log(last('take me to semynak'));