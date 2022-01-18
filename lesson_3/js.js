const  ar = [2, 100, 9, 80];
ar.sort(function (a,b){
    return a - b;
});
console.log( `ar is ${ar.toString()}`);

ar.sort((a,b) => a - b);
console.log( `ar is ${ar.toString()}`);

ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);

const ar1 = [-8, 30, -57];
//ar.push(ar1); there will be added but separated numbers
// if you want to add numbers you shoud apple a spread operator...
ar.push(...ar1);
console.log(ar);

//for adding elements at the begining of an array there is method "unshift"
//evething has been said about "push" will work for "unshift" only unlike "push" unshift
// adds elements at begining

const ar2 = [27,35];
ar.unshift(...ar2);
console.log(ar);

//abc123defg- in the meedle
//method splice for inserting or replacing any elements in any place
//first argument -index for inserting or replacing
//second argument - number of the deleted elements (if 0 than splice will be applied
//third argument designates sequence of being inserted like/push/unshift

ar.splice(2, 0, 1, 2);
console.log(ar);

//removing(deleting)
//pop-removes the last element and return it
// el = -57; -57 will be removed from the array ar

let el = ar.pop();
console.log(ar);

el = ar.shift();//removes the first elements and returnsit
//el = 27; 27 will be removed from the array ar

console.log(el, ar);

ar.splice(3, 5);//remove 5 elemements beginning from the one at index 3
console.log(ar);

//includes, indexOf

//two dimensional arrays

const matrix1 = [[1, 2, 3],[4, 5, 6],[7, 8, 9], [8, 9, 7]];
const matrix2 = [[10, 20], [50, -5], [34, 28]];
function displayMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row  = '';
        for (let j = 0; j < matrix[i].length;j++){
            row = row + matrix[i][j] + '  '
        }
        console.log(row);
    }
}
displayMatrix(matrix1);
displayMatrix(matrix2);



