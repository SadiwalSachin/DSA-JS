let array = [3, 2, 3];

let n = array.length / 2;
let singleTimeElement = [];

for (let val of array) {
  let frequency = 0;
  if (!singleTimeElement.includes(val)) {
    singleTimeElement.push(val);
    for (let el of array) {
        if (el == val) {
          frequency++;
        }
      }
      if (frequency > n) {
        console.log(`Majority Element finded ${val}`);
      }
  }
  continue
}
