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

function containsCommonItem2(arr1, arr2){
let map = {};
for (let i = 0; i < arr1.length; i++){
  if (!map[arr1[i]]) {
    const item = arr1[i];
    map[item] = true;
  }
}
for (let j = 0; j < arr2.length; j++) {
  if (map[array2[j]]){
    return true;
  }
}
return false
}

//0(a + b)
containsCommonItem2(array1, array2)

class Player {
  constructor(name, type){
    console.log(this);
      this.name = name;
      this.type = type;
  }
  introduce() {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type){
    // whenever you use 'extends' you need to use 'super' to use name and type.
    super(name, type)
  }
  play() {
    console.log("Weeeee I'm a ${this.type}");
  }

}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");


//c++ practice
// #include<iostream>
// using namespace std;
// int main ()
// {
//   int var=99;
//   unsighned int var2=-99;
//   cout<<var<<end1;
//   cout<<var2<<end1;
// return 0;
// }

class MyArray { // within the myArray class will have the constructor which is the initional function
  constructor(){ // will have to data points (length property and data property)
    this.length = 0; // the length is 0 the amount of items the array has
    this.data = {}; // data within the array {} is an object
  }
  get(index) { // get method to grab data form memory
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++
    return this.length
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index){
    for(let i = index; i < this.length - 1; i++)
    {
    this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
}
}
const newArray = new MyArray(); //to instantiate or copy the class
newArray.push("Hi");
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);

// creating a functinthe reverses a string:
// "hi my name is Frank"
// "knarF si eman ih"

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'hmmm thats not good';
  }
  // first way
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i = 0; i--){
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join('');
}
// second way
function reverse2(str){
  return str.split('').reverse().join('')
}
//third way

const reverse3 = str => str.split('').reverse().join('');

reverse('Hi my name is Frank')


// Danyah's practice
function reverse(str) {
 //check input
 if (!str || str.length < 2 || typeof str !== 'string'){
 } // first way
 const backwards = [];
 const totalItems = str.length - 1;
 for (let i = totalItems; i = 0; i--{

 }
  console.log(backwards);

  return backwards.join('');
}
//second way
function reverse2(str){
  return str.split('').reverse().join('')
}
//third way

const reverse3 = str => str.split('').reverse().join('');

reverse('Hi my name is Frank')

// merging sorted arrays
function mergeSortedArrays(arr1, arr2);{
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];

  //check input
  if (array1.length === 0){
    return array2;
  }
  if (array2.length === 0){
    return array1;
  }
  while (array1Item || array2Item){
    if (array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array[i];
      i++;
    }else{ 
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);

// Danyah's C++
// #include <iostream>
// using namespace std;
// int main()
// {
// int first,second;
// cout<<"Enter two Numbers"<<end1;
// cin>>first>>second;
// if( first > second )
// {
// cout<<"First number is greater which is = " <<first<<end1;
// }
// return 0;
// }

// #include <iostream>
// using namespace std;
// int main()
// {
// int first,second;
// cout<<"Enter two Numbers"<<end1;
// cin>>first>>second;
// if( first > second )
// {
//   cout<<" First number is greater which is = "<<first<<end1;
// }
// return 0;
// }

// edge list
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];
// Adjacent List
const graph = [[2], [2, 3], [0, 1, 3, [1, 2]];
//adjacent Matrix
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]

class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  { 
    this.adjacentList[node] = [];
    this.adjacentList = {

    };
  } 
  addEdge(node1, node2) { 
    //undirected Graph 
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5


class HashTable {
  constructor(size){
    this.data = new Array(size);
    [['grapes', 100000]]
  }
  _hash(key){
    let hash = 0;
    for (let i =0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) %
      this.data.length
    }
    return hash;
  }
  set (key, value){
    let address = this._hash(key);
    if (!this.data[address]){
    this.data[address] = [];
    this.data[address].push([key, value])
    console.log(this.data)
  }
  this.data[address].push([key, value])
  return this.data
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.lenght){
      for(let i = 0; i < currentBucket.length; i++)
      {
        if(currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }  
    }
    return undefined
  }
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes', 54);
myHashTable.get('grapes');

// c++
#include<iostream>
using namespace std;
int main()
{
int first,second;
cout<<"Enter two numbers"<<end1;
cin>>first>>second;
if ( first > second )
{
cout<<"First number is greater= "<<first<<end1;
{
else
}
cout<<"second number is greater"<<second<<end1;
}
return 0;
}
