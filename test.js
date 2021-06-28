console.log("Test File!!");
const arr = '[0130],[123-4],[1234X]';
// const strarry = JSON.stringify(arr);
// console.log(typeof strarry.split(','));
 console.log(arr.split(','));
 console.log(arr.replace(/[\[\] ']+/g,'').split(','));
 console.log(arr.replace('[','').replace(']','').split(','));

// console.log(JSON.stringify(arr));
// const strArr = JSON.parse(arr);
// console.log(typeof strArr); 



// const arr1 = '[1,2,3,4,5]';
// const strArr1 = arr1 ? JSON.parse(arr1).map((e) => e.toString()) : [3000]
// console.log(strArr1); 