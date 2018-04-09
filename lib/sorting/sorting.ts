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
