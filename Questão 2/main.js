let arr = [1,3,4,2,7,5,6,8,9,10,11,12,13,14,15,25,43,23,16,53];
let arr1 = arr.reduce(function(acc,valorAtual){
    return acc+valorAtual;
})
document.write(arr1);