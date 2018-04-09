const isArray = Array.isArray;

//NOT VALID FOR IMAGINARY ROOTS AND NEED TO CHECK FOR NEGATIVE NUMBERS
export function hornerPolynomialRule(data: Array<any>, value): any {
    if (!isArray(data)) {
        return data;
    }
    let res = 0, dataLength = (data.length -1);
    for (let i = 0; i < dataLength; i++) {
      res = value * (data[i] + res);
    }
    res += data[dataLength];
    return res;
}

//TODO : MAXIMUM_SUBARRAY_SIZE
