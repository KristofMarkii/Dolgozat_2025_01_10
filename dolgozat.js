// 1 feladat 
var isAnagram = function(test, original) {
    const normalize(str) => str.ToLowerCase().split('')
};

// 2. feladat 
function oddOrEven(array) {
    //enter code here
 }
//3.feladat
 function getGrade (s1, s2, s3) {
    const avrage=(s1+s2+s3)/3
    if(avrage>=90){
        return 'A'    
    }
    else if (avrage >=80 && avrage<90){
        return 'B'
    }
    else if (avrage>=70 && avrage <80){
        return 'C'
    }    
    else if (avrage>=60 && avrage<70)
    {
        return 'D'
    }
    else {
        return 'F'
    }
  }
// 4. feladat 
  function divisibleByThree(str){
    let ossz = 0;
    for ( let i = 0; i < str.lenght ; i++){
        ossz += str[i]
        
    }
    return str % 3 == 0;
  }
