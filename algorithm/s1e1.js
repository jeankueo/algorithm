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
s1e1.e6 = function (f, g) {
	for (var i = 0; i < 15; i ++) {
		console.log(f);
		f = f + g;
		g = f - g;
	}
};

s1e1.e7a = function () {
	var t = 9;
	while (this.abs(t - 9/t) > 0.01) { 
		t = (9/t + t) / 2;
	}
	console.log (t); // 与sqre相比精度低了，结果是 3.00009155413138
};

s1e1.e7b = function () {
	var sum = 0; 
	for (var i = 1; i < 1000; i++) {
		for (var j = 0; j < i; j++) {
			sum++;
		}
	}
	console.log(sum); //499500
};

s1e1.e7c = function () {
	var sum = 0; 
	for (var i = 1; i < 1000; i *= 2) {  // * 1+9
		for (var j = 0; j < 1000; j++) { // *1000
			sum++;
		}
	}
	console.log(sum); // 10000
};

s1e1.e9r = function (p) { // binary represent -- recursive
	var d = Math.floor(p / 2),
		r = p % 2;
	if (d > 0) {
		return this.e9r(d)  + '' + r;
	} else {
		return '' + r;
	}
};

s1e1.e9l = function (p) {// binary represent -- loop
	var retval = '';
	for (var i = p; i > 0; i = Math.floor(i / 2) ){
		retval = (i % 2) + retval;
	}
	return retval;
};

s1e1.e11 = {};
s1e1.e11.input = [
	[true, false, false],
	[false, false, true],
	[true, false, true]
];
s1e1.e11.printBoolean = function (input) {
	input.map(function (row, i) {
		var log = 'row ' + i + ':[';
		row.map(function (cell, j) {
			log += cell ? 'x' : 'o';
		});
		console.log(log + ']');
	});
};

s1e1.e13 = {};
s1e1.e13.input = [
	[1,1.1,1.2,1.3,1.4],
	[2,2.1,2.2,2.3,2.4],
	[3,3.1,3.2,3.3,3.4]
];
s1e1.e13.transposition = function (input) {
	var retVal = [];
	input.map(function (row, i) {
		row.map(function (cell, j) {
			retVal[j] = retVal[j] || [];
			retVal[j][i] = cell;
		});
	});
	return retVal;
};

s1e1.e14 = {};
s1e1.e14.lg = function (iInteger) {
	var retVal = 0, value = 1;
	while (value * 2 <= iInteger) {
		value = value * 2;
		retVal++;
	}
	return retVal;
};