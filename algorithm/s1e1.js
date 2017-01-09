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

s1e1.BinarySearch = {};
s1e1.BinarySearch.rank = function (iValue, aSortedArray, vLow, vHigh) {
	if (vLow === undefined && vHigh === undefined) {
		return this.rank(iValue, aSortedArray, 0, aSortedArray.length - 1);
	}
	if (vLow > vHigh) {
		return -1;
	}
	var iMid = Math.floor(( vLow  +  vHigh ) / 2);
	if (iValue === aSortedArray[iMid]) {
		return iMid;
	} else if (iValue < aSortedArray[iMid]) {
		return this.rank(iValue, aSortedArray, vLow, iMid - 1);
	} else { // >
		return this.rank(iValue, aSortedArray, iMid + 1, vHigh);
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

s1e1.e15 = {};
s1e1.e15.input1 = [3,5,2,3,2,1,1];
s1e1.e15.input2 = 10;
s1e1.e15.histogram = function (aArray, iM) {
	var retVal = new Array(iM);
	for (var i = 0; i < iM; i++) {
		retVal[i] = 0;
	}
	aArray.map(function (cell, i) {
		retVal[cell]++;
	});
	return retVal;
};

s1e1.e16 = function (n) { // 6 => 311361142246
	if (n <= 0) {
		return '';
	}
	return this.e16(n - 3) + n + this.e16(n - 2) + n;
}

s1e1.e17 = function (n) {
	if (n <= 0) {
		return "";
	}
	var retVal = s1e1.e17(n-3) + n + s1e1.e17(n-2) + n;
	return retVal;
}

s1e1.e18 = function (a, b) {
	if (b === 0) {
		return 0;
	}
	if (b %  2 === 0) {
		return s1e1.e18(a+a, Math.floor(b/2));
	}
	return s1e1.e18(a+a, Math.floor(b/2)) + a;
};
// 2,25 +2; 4,12; 8,6; 16,3 +16; 32,1 +32; 64,0; => 50
// 3,11  +3; 6,5 +6; 12,2; 24,1 +24; 48,0; => 33

s1e1.e19 = function (n, array) {
	for (var i = 0; i < n; i++) {
		if (i === 0 || i === 1) {
			array.push(i);
		} else {
			array.push(array[i - 1] + array[i - 2]);
		}
	}
};

s1e1.e20 = function (n) {
	return Math.log(n, Math.E) + (n === 1 ? 0 : s1e1.e20(n - 1));
};

s1e1.BinarySearch.rankPrintDepth = function (iValue, aSortedArray, vLow, vHigh, vDepth) {
	vDepth = vDepth || 1;

	console.log("depth: " + vDepth + "; low: " + vLow + "; high: " + vHigh);

	if (vLow === undefined && vHigh === undefined) {
		return this.rankPrintDepth(iValue, aSortedArray, 0, aSortedArray.length - 1, ++vDepth);
	}
	if (vLow > vHigh) {
		return -1;
	}
	var iMid = Math.floor(( vLow  +  vHigh ) / 2);
	if (iValue === aSortedArray[iMid]) {
		return iMid;
	} else if (iValue < aSortedArray[iMid]) {
		return this.rankPrintDepth(iValue, aSortedArray, vLow, iMid - 1, ++vDepth);
	} else {
		return this.rankPrintDepth(iValue, aSortedArray, iMid + 1, vHigh, ++vDepth);
	}
};

s1e1.e22 = function () {
	return s1e1.BinarySearch.rankPrintDepth(3, [1,3,5,5,6,7,9]);
};

s1e1.e24 = function (p, q, iDepth) {
	iDepth = iDepth || 1;
	console.log("p: " + p + "; q:" + q + "; depth: " + iDepth);
	return q === 0 ? p : s1e1.e24(q, p % q, ++iDepth);
}

s1e1.e26 = "bubble sorting";

s1e1.e27 = {};

/*
 * Known:
 *  1. The change of target happens is dP (value von 0 bis1)
 *  2. repeat the experiment iN times
 * Question:
 *  the chance that target happens iK times is:
 *  p = C(iK, iN) * dP ^ iK * (1 - dP) ^ (iN - iK)
 */
s1e1.e27.i1 = function (iN, iK, dP) {
	if (iN === 0 && iK === 0) {
		return 1.0;
	}
	if (iN < 0 || iK < 0) {
		return 0.0;
	}
	return (1 - dP) * s1e1.e27.i1(iN - 1, iK, dP) + dP * s1e1.e27.i1(iN - 1, iK - 1, dP);
}

s1e1.e27.i2 = function (iN, iK, dP) {
	return s1e1.e27.i21(iK, dP / (1 - dP)) * s1e1.e27.i22(iN, 1 - dP) / s1e1.e27.i23(iN - iK);
}

s1e1.e27.i21 = function (iK, dX) {
	if (iK === 0) {
		return 1.0;
	}
	return (dX / iK )  * s1e1.e27.i21(iK - 1, dX);
}

s1e1.e27.i22 = function (iN, dY) {
	if (iN === 0) {
		return 1.0;
	}
	return iN * dY * s1e1.e27.i22(iN - 1, dY);
}

s1e1.e27.i23 = function (iZ) {
	if (iZ === 0) {
		return 1.0;
	}
	return iZ * s1e1.e27.i23(iZ - 1);
}

s1e1.e27.lee = function (iN, iK, dP) {
	var aRetVal = new Array(iK + 1),
		aTemp = new Array(iK + 1);
	aRetVal[0] = 1;

	for (var i = 1; i <= iN; i++) {
		aTemp = new Array(iK + 1);
		aTemp[0] = aRetVal[0] * (1 - dP);
		for (var j = 1; j < aRetVal.length; j++) {
			aTemp[j] = aRetVal[j - 1] * dP + (aRetVal[j] || 0) * (1 - dP);
		}
		aRetVal = aTemp;
	}

	return aRetVal[iK];	
}

s1e1.BinarySearch.removeDuplicate = function (aSortedArray) {
	var iIndex = 0;
	while (iIndex < aSortedArray.length) {
		var iBinaryIndex = this.rank(aSortedArray[iIndex], aSortedArray);
		if (iBinaryIndex != iIndex ) {
			aSortedArray.splice(Math.min(iIndex, iBinaryIndex), Math.abs(iIndex - iBinaryIndex));
			iIndex = Math.min(iIndex, iBinaryIndex);
		} else {
			iIndex++;
		}
	}
	return aSortedArray;
};

s1e1.e28 = function (aSortedArray) {
	return s1e1.BinarySearch.removeDuplicate([1,2,2,3,3,3,4,4,4,4]);
}

s1e1.BinarySearch.rank2 = function (iKey, aSortedArray) {
	var iRetVal,
		iTemp = aSortedArray.length,
		aTemp;

	do {
		iRetVal = iTemp; 
		aTemp = aSortedArray.slice(0, iTemp);
		iTemp = this.rank(iKey, aTemp);
	} while (iTemp >= 0)

	return iRetVal;
}

s1e1.BinarySearch.count = function (iKey, aSortedArray) {
	
}

s1e1.e29 = function () {

}