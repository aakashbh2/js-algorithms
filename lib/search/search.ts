const isArray = Array.isArray;

export function linearSearch(data: Array<any>, valueToSearch, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  for (let i=0; i<data.length; i++) {
		if(data[i] === valueToSearch) {
      showComplexity ? console.log("worst case scenario = Θ(n)") : "" ;
			return i;
		}
	}
  showComplexity ? console.log("worst case scenario = Θ(n)") : "" ;
	return -1;
}

//NEED SORTED ARRAY
export function binarySearch(data: Array<any>, valueToSearch, showComplexity: boolean = false) {
    if (!isArray(data)) {
        return data;
    }
    let mid,
        min = 0,
        max = data.length - 1;

    while(min <= max) {
        mid = Math.floor((min + max) /2);
  	if (data[mid] === valueToSearch) {
        showComplexity ? console.log("worst case scenario = Θ(log n)") : "" ;
  	    return mid;
    }
  	else if (data[mid] < valueToSearch) {
  	    min = mid + 1;
    }
  	else {
  	    max = mid - 1;
    }
  }
 showComplexity ? console.log("worst case scenario = Θ(log n)") : "" ;
 return -1;
}

//NEED SORTED ARRAY
export function jumpSearch(data: Array<any>, valueToSearch, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  let size = data.length;
  let step = Math.sqrt(size);
  let prev = 0;

  while (data[Math.min(step, size) - 1] < valueToSearch)
  {
      prev = step;
      step += Math.sqrt(size);
      if (prev >= size){
        showComplexity ? console.log("Complexity of Jump Search is between Linear Search O(n) and Binary Search O(Log n)") : "" ;
        return -1;
      }
  }

  while (data[prev] < valueToSearch)
  {
      prev++;
      if (prev === Math.min(step, size)) {
          showComplexity ? console.log("Complexity of Jump Search is between Linear Search O(n) and Binary Search O(Log n)") : "" ;
          return -1;
      }
  }

  if (data[prev] === valueToSearch) {
      showComplexity ? console.log("Complexity of Jump Search is between Linear Search O(n) and Binary Search O(Log n)") : "" ;
      return prev;
  }
  return -1;
}


//mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo]);
//NEED SORTED ARRAY
export function interpolationSearch(data: Array<any>, valueToSearch, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  let length = data.length;
  let low = 0;
  let high = length-1;
  let mid = -1;
  while(low <= high
        && valueToSearch >= data[low]
        && valueToSearch <= data[high]){
    let mid = low + ((high - low)/ (data[high] - data[low])) * (valueToSearch - data[low]);
    mid = Math.floor(mid);
    if (data[mid] == valueToSearch) {
      showComplexity ? console.log("worst case scenario = Θ(n)") : "" ;
      return mid;
    }
    if (data[mid] < valueToSearch){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  showComplexity ? console.log("worst case scenario = Θ(n)") : "" ;
  return -1;
}

//NEED SORTED ARRAY
export function exponentialSearch(data: Array<any>, valueToSearch, showComplexity: boolean = false) {
  if (!isArray(data)) {
      return data;
  }
  // If x is present at firt location itself
  if (data[0] === valueToSearch) {
      showComplexity ? console.log("worst case scenario = Θ(log n)") : "" ;
      return 0;
  }
  let i = 1;
  while (i < data.length && data[i] <= valueToSearch) {
      i = i*2;
  }
  showComplexity ? console.log("worst case scenario = Θ(log n)") : "" ;
  return recurrsiveBinarySearch(data, i/2, Math.min(i, data.length), valueToSearch);
}

function recurrsiveBinarySearch(arr, l, r, x) {
    if (r >= l)
    {
        let mid = l + (r - l)/2;
        mid = Math.floor(mid);
        if (arr[mid] === x) {
            return mid;
        }
        if (arr[mid] > x) {
            return recurrsiveBinarySearch(arr, l, mid-1, x);
        }
        return recurrsiveBinarySearch(arr, mid+1, r, x);
    }
    return -1;
}
