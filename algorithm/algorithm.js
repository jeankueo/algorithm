function printArray (aTarget)  {
	console.log('[' + aTarget.join(', ') + ']');
};
function printMatrix(aTarget)  {
	for (var i = 0; i < aTarget.length; i++) {
		printArray(aTarget[i]);
	}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
function gcd (p, q)  {  // Euclid's algorithm
	return  q === 0 ? p : gcd(q, p % q);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
function arrayMultiple (a, b)  { // a[] , b[] are two ararys
	var retval = new Array(a.length);

	for (var i = 0; i < a.length; i++) {
		retval[i] = new Array(b.length);
		for (var j = 0; j < b.length; j++) {
			retval[i][j] = a[i] * b[j]
		} 
	}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
function matrixMultiple (a, b)  {// a[][], b[][] are two-dimension square arrays 
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
///////////////////////////////////////////////////////////////////////////////////////////////////////
function abs (p) {
	return p < 0 ? -p : p;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
function isPrime (p) {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////
function sqrt (p) { // Newton's method
	if (p < 0) {
		return NaN;
	}

	var err = 1e-15, // decide precision
		t = p;
	while (abs(t - p / t) > err * t) {
		t = (p / t + t) / 2
	}
	return t;
}
