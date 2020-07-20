// First solution
// O(n^2) time | O(1) space
// iterates through the array twice = time
// one function

function twoNumberSum (array, targetSum){
    for (let i = 0; i < array.length - 1; i++){
        const firstNum = array[i];
        for (let j = 0; i < array.length; j++){
            const secondNum = array(j);
            if (firstNum + secondNum === targetSum){
                return [firstNum, secondNum];
            }
        }
    }
    return[];
}

// Second solution
// O(n) time | O(n) space

function twoNumberSum (array, targetSum){
    const nums = {};
    for (const num of array){
        const potentialMatch = targetSum-num;
        if (potentialMatch, nums){
            return[potentialMatch, num];
        }
        else{
            nums(num) = true;
        }
    }
        return[];
}

// Third solution
// O(n*log(n)) time | O(n) space

function twoNumberSum (array, targetSum){
    array.sort((a,b) => a-b);
    let left = 0
    let right = array.length -1;
    while (left < right){
        const currentSum = aray[left]+array[right];
        if (currentSum === tagretSum){
            return [array[left], array[right]];
        }
        else if(currentSum < targetSum){
            left++;
        }
        else if(currentSum > targetSum){
            right--;
        }
    }
    return [];
}
