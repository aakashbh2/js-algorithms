const isArray = Array.isArray;

export function insertionSort(data: Array<any>, showComplexity: boolean = false) {
    if (!isArray(data)) {
        return data;
    }
    let i, j;
    for (i = 0; i < data.length; i++) {
      let value = data[i];
      for (j = i - 1; j > -1 && data[j] > value; j--) {
        data[j + 1] = data[j];
      }
      data[j + 1] = value;
    }
    showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
    return data;
}


export function mergeSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
   let len = data.length;
   if (len <2) {
      return data;
   }
   let mid = Math.floor(len/2),
       left = data.slice(0,mid),
       right =data.slice(mid);
   showComplexity ? console.log("worst case scenario = Θ(nlog n)") : "" ;
   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
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


export function bubbleSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
   var len = data.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(data[j-1]>data[j]){
           var temp = data[j-1];
           data[j-1] = data[j];
           data[j] = temp;
        }
     }
   }
   showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
   return data;
}

export function selectionSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  for(var i = 0; i < data.length; i++) {
    var min = i;
    for(var j = i+1; j < data.length; j++){
      if(data[j] < data[min]){
        min = j;
      }
    }
    swap(data, i, min);
  }
  showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
  return data;
}

//MAKE UTIL FILE FOR THIS
function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex]  = array[secondIndex];
    array[secondIndex] = temp;
}

export function heapSort(data: Array<any>, showComplexity: boolean = false) {
    if (!isArray(data)) {
        return data;
    }
    let n = data.length;
    for (let i = Math.floor(n / 2) + 1; i >= 0; i--) {
      heapify(data, n, i);
    }

    // One by one extract an element from heap
    for (var i=n-1; i>=0; i--) {
        // Move current root to end
        swap(data, 0, i);
        // call max heapify on the reduced heap
        heapify(data, i, 0);
    }
    showComplexity ? console.log("worst case scenario = Θ(nLog n)") : "" ;
    return data;
}

function heapify(array, length, index) {
    var largest = index;
    var left = 2*index + 1;
    var right = left + 1;

    // If left child is larger than root
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    // If right child is larger than largest
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    // If largest is not root
    if (largest != index) {
        swap(array, index, largest);
        // Recursively heapify the affected sub-tree
        heapify(array, length, largest);
    }
}

//SEE WHY SORT DOES NOT WORK
export function cycleSort(data: Array<any>, showComplexity: boolean = false) {
        if (!isArray(data)) {
            return data;
        }
        var writes = 0;
        var length =data.length;

        for (var cycle_start = 0; cycle_start <= length - 2; cycle_start++) {
            var item = data[cycle_start];
            var pos = cycle_start;
            for (var i = cycle_start + 1; i < length; i++) {
                if (data[i] < item) {
                    pos++;
                }
            }
            if (pos === cycle_start) {
                continue;
            }

            // ignore all duplicate elements
            while (item === data[pos]) {
                pos += 1;
            }

            if (pos !== cycle_start) {
                var temp = item;
                item = data[pos];
                data[pos] = temp;
                writes++;
            }

            // Rotate rest of the cycle
            while (pos !== cycle_start) {
                pos = cycle_start;

                for (var i = cycle_start + 1; i < length; i++) {
                    if (data[i] < item) {
                        pos += 1;
                    }
                }

                while (item === data[pos]) {
                    pos += 1;
                }

                if (item != data[pos]) {
                    var temp = item;
                    item = data[pos];
                    data[pos] = temp;
                    writes++;
                }
            }
        }
  showComplexity ? console.log("This sorting algorithm is best suited for situations where memory write or swap operations are costly as nuber of writes for this sort was "+ writes +". Worst case scenario = Θ(n^2)") : "" ;
  return data;
}

export function quickSort(data: Array<any>, startingIndex: number = 0, endIndex: number = data.length - 1, showComplexity: boolean = false) {
    if (!isArray(data)) {
        return data;
    }
    if (startingIndex < endIndex) {
        var pi = partition(data, startingIndex, endIndex);

        quickSort(data, startingIndex, pi - 1);
        quickSort(data, pi + 1, endIndex);
    }
  showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
  return data;
}

function partition (array, low, high) {
    var pivot = array[high];
    var i = (low - 1);

    for (var j = low; j <= high- 1; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i ,j);
        }
    }
    swap(array ,i + 1, high);
    return (i + 1);
}

export function countingSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  var bucket = [], idx = 0;

  for(var i = 0;i<data.length;i++) {
    bucket[data[i]] = bucket[data[i]] || 0
    bucket[data[i]]++ ;
  }

  for(i = 0; i< bucket.length;i++) {
    while(bucket[i] && bucket[i] > 0) {
      data[idx++] = i;
      bucket[i]--;
    }
  }
  showComplexity ? console.log("worst case scenario = O(n+k) where n is the number of elements in input array and k is the range of input.") : "" ;
  return data;
}

//Bucket size is
export function bucketSort(data: Array<any>, bucketSize: number = 200, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  var i,
      minValue = data[0],
      maxValue = data[0],
      bucketSize = bucketSize;

  data.forEach(currentVal => {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  data.forEach(function (currentVal) {
  	allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  data.length = 0;

  allBuckets.forEach(bucket => {
    insertionSort(bucket);
  	bucket.forEach(element => {
      data.push(element);
    });
  });
  showComplexity ? console.log("The complexity of bucket sort isn’t constant depending on the input. It's worst-case performance is Θ(n^2).") : "" ;
  return data;
}

export function radixSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  var max = Math.floor((Math.log(Math.max(...data))) / Math.LN10 ),
      // get the length of digits of the max value in this array
      digitBuckets = [],
      id = 0;

  for(var i = 0; i < max + 1; i++) {

    digitBuckets = [];
    for(var j = 0;j<data.length;j++){
      var digit = getNthDigit(data[j],i+1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(data[j]);
    }

    id = 0;
    for(var t = 0; t< digitBuckets.length;t++){
      if(digitBuckets[t] && digitBuckets[t].length > 0){
        for(j = 0;j<digitBuckets[t].length;j++){
          data[id++] = digitBuckets[t][j];
        }
      }
    }
  }
  showComplexity ? console.log("worst case scenario = Θ(nk)") : "" ;
  return data;
}

function getNthDigit(num, nth) {
  // get last nth digit of a number
  var ret = 0;
  while(nth--){
    ret = num % 10;
    num = Math.floor((num - ret) / 10);
  }
  return ret;
}

export function shellSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  var n = data.length;
  for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
          for (var i = gap; i < n; i += 1) {
              var temp = data[i];
              for (var j = i; j >= gap && data[j - gap] > temp; j -= gap) {
                  data[j] = data[j - gap];
              }
              data[j] = temp;
          }
      }
    showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
    return data;
}

export function combSort(data: Array<any>, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  var gap = data.length;
    var swapped = true;

    while (gap != 1 || swapped === true) {
        gap = getNextGap(gap);
        swapped = false;
        for (var i=0; i< data.length - gap; i++) {
            if (data[i] > data[i+gap]) {
                swap(data ,i, i+gap);
                swapped = true;
            }
        }
    }
    showComplexity ? console.log("worst case scenario = Θ(n^2)") : "" ;
    return data;
}

function getNextGap(gap) {
    gap = (gap*10)/13;
    if (gap < 1) {
        return 1;
    }
    return gap;
}
