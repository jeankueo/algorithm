//////////// study notes ////////////////////////////////////////////////////////////////////////////////
var s1e1 = {};
 
s1e1.gcd = function (p, q)  {  // Euclid's algorithm
	return  q === 0 ? p : this.gcd(q, p % q);
};
 
s1e1.arrayMultiple = function  (a, b)  { // a[] , b[] are two ararys
	var retval = new Array(a.length);

	for (var i = 0; i < a.length; i++) {
		retval[i] = new Array(b.length);
		for (var j = 0; j < b.length; j++) {
			retval[i][j] = a[i] * b[j]
		} 
	}

	return retval;
};
 
s1e1.matrixMultiple = function (a, b)  {// a[][], b[][] are two-dimension square arrays 
	var length = a.length;
	var retval = new Array(length);

	for (var i = 0; i < length; i++) {
		retval[i] = new Array(length);
		for (var j = 0; j < length; j++) {
			retval[i][j] = 0;
			for (var k = 0; k < length; k++) {
				retval[i][j] += a[i][k] * b [k][j];
			}
		}
	}

	return retval;
};
 
s1e1.abs = function  (p) {
	return p < 0 ? -p : p;
};
 
s1e1.isPrime = function (p) {
	if (p < 2) {
		return false;
	}
	for (var i = 2; i * i <= p; i++) {
		if (p % i === 0) {
			return false;
		}
	}
	return true;
};
 
s1e1.sqrt = function (p) { // Newton's method
	if (p < 0) {
		return NaN;
	}

	var err = 1e-15, // decide precision
		t = p;
	while (this.abs(t - p / t) > err) {
		t = (p / t + t) / 2
	}
	return t;
};
 
s1e1.binarySearch = function (iValue, aSortedArray, vLow, vHigh) {
	if (vLow === undefined && vHigh === undefined) {
		return this.binarySearch(iValue, aSortedArray, 0, aSortedArray.length - 1);
	}
	if (vLow > vHigh) {
		return -1;
	}
	var iMid = Math.floor(( vLow  +  vHigh ) / 2);
	if (iValue === aSortedArray[iMid]) {
		return iMid;
	} else if (iValue < aSortedArray[iMid]) {
		return this.binarySearch(iValue, aSortedArray, vLow, iMid - 1);
	} else { // >
		return this.binarySearch(iValue, aSortedArray, iMid + 1, vHigh);
	}
};
//////////// exercise ////////////////////////////////////////////////////////////////////////////////////////
s1e1.e113 = function () {

};