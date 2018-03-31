import {isObjectType} from './util';

export function insertionSort(data: Object|Array<any>, showComplexity: boolean = false): any {
    if (!isObjectType(data)) {
        return data;
    }
    for (let i = 0; i < items.length; i++) {
      let value = items[i];
      // store the current item value so it can be placed right
      for (let j = i - 1; j > -1 && items[j] > value; j--) {
        // loop through the items in the sorted array (the items from the current to the beginning)
        // copy each item to the next one
        items[j + 1] = items[j];
      }
      // the last item we've reached should now hold the value of the currently sorted item
      items[j + 1] = value;
    }
    showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
    return list;
}

export function mergeSort(data: Object|Array<any>, showComplexity: boolean = false): any {
  if (!isObjectType(data)) {
      return data;
  }
   let len = data.length;
   if (len <2) {
      return data;
   }
   let mid = Math.floor(len/2),
       left = data.slice(0,mid),
       right =data.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   showComplexity ? console.log("worst case scenario = Θ(nlog n)") : "" ;
   return merge(mergeSort(left),mergeSort(right));
}

private function merge(left, right){
  let result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
