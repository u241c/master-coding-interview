1.1// Big O and Scalability Beginnings how long an alogo takes to run
// const nemo = ['nemo'];
// // creating an array (nemo) 100xs
// const large = new Array(100).fill('nemo')
// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('found Nemo!');
//         }
//     }
//     let t1 = performance.now();
//     console.log('call to find nemo took' + (t1-t0) + 'milliseconds');
// }
// findNemo(large);

1.2// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// // creating an array (nemo) 100xs
// const large = new Array(100).fill('nemo')
// function findNemo(array) {
    
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('found Nemo!');
//         }
//     }
    
    
// }
// findNemo(large); // 0(n) --> linear time to find nemo --> (n)can be replaced with anything means the Big 0 depend on the number of imputs(1)for nemo array (10)for the everyone array


1.3 // in terms of Scalability O(1) - constant time - flat line
const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1) # of operations
    console.log(boxes[1]); //O(1) # of operations
}
logFirstTwoBoxes(boxes); // O(2) 2 operations

// Big O excersize
// function funChallenge(input) {
//     let a = 10;//O(1)
//     a = 50 + 3;//O(1)

//     for (let i = 0; i < input.length; i++) { //O(n)
//         anotherFunction(); //O(n)
//         let stranger = true; //O(n)
//         a++; //O(n)
//     }
//     return a; //O(1)
// }
// 3 + 4n

// Big O excersize 2
// function anotherFunChallenge(input) {
//     let a = 5; //O(1)x's
//     let b = 10; //O(1)
//     let c = 50; //O(1)
//     for (let i = 0; i < input; i++) { //O(n)
//       let x = i + 1; //O(n)
//       let y = i + 2; //O(n)
//       let z = i + 3; //O(n)
  
//     }
//     for (let j = 0; j < input; j++) { //O(n)
//       let p = j * 2; //O(n)
//       let q = j * 2; //O(n)
//     }
//     let whoAmI = "I don't know"; //O(1)
//   }

  // 4 + 7n

// (place in console)  Rule 1: worst case
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// creating an array (nemo) 100xs
const large = new Array(100).fill('nemo');
function findNemo(array) {
    
    for (let i = 0; i < array.length; i++){
      console.log("running")
        if (array[i] === 'nemo'){
            console.log('found Nemo!');
            break;
        }
      }
    }
    findNemo(everyone);//O(n) because we don't know if nemo is at the beginning, middle or end of the array

    // Rule 2: Remove Constants O(n)
    // Rule 3: Different terms for inputs

    function compressBoxesTwice(boxes, boxes2){
      boxes.forEach(function(boxes){
        console.log(boxes);
      });
      boxes2.forEach(function(boxes){
        console.log(boxes);
      });

    }
    O(a + b)
    // log all pairs of array nested together loops we use *(O(n*n)) || O(n^2)
    const boxes = ['a','b','c','d','e'];
    function logAllPairsOfArray(array){
      for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
        console.log(array[i], array[j])

        }
      }
    }
    logAllPairsOfArray(boxes)

    //Rule 4: Drop non Dominants
    // O(x^2+3x+100+x/2) becomes O(x^2)
    

    // Space Complexity
    function boo(n){
      for(let i = 0; i < n.length; i++){
        console.log('boo!');
      }
    }
    boo([1,2,3,4,5]) //O(1)

    function arrayOfHiNTimes(n){
        let hiArray = []
          for (let i = 0; i < n; i++){
            hiArray[i] = 'hi';
          }
          return hiArray;
        }
        arrayOfHiNTimes(6) //O(n)
// Find 1st, Find Nth...
const array = ['hi', 'my', 'teddy'];
array[0];// O(1)
array[array.length-1]// O(1);
    
    
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];
function containsCommonItem(arr1, arr2){
for (let i = 0; i < array1.length; i++){
  for (let j = 0; j < array.length; j++){
    if(array1[i] === array2[j]){
      return true; 
    }
  }
  }
} return false;

containsCommonItem(array1, array2);
// time complexity for this is slow O(n^2)
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];