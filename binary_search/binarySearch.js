/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i=0;
    let j=nums.length;
    let m;
    while(i<=j){
        m = Math.floor((i+j)/2);
        if(nums[m]==target){
            return m;
        }else if(nums[m]>target){
            j=m-1;
        }else{
            i=m+1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,5,9,12],59))