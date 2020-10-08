
// linear search -
//loop through each element of the array and return the match
// called linear search 
// want to find x = 50 ,return the position 

//  arr = [10,20, 30 ,50,60];
// output - 4 , x = 50
//output -80 , return -1 
// where,  x is element to find 

//[10,20,40,50,50],50)

function linearSearch(arr, x){
    for(let i=0; i<arr.length;i++){
        if(arr[i] ==x){
            return i
        }
    }
    return null
}
console.log(linearSearch([10,20,40,50,50],50))







