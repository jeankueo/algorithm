/*
 * class implementation
 */

// prototype chain
function Apple () {
	this.color = undefined;
	this.size = undefined;
}
Apple.prototype.getInfo = function () {
	return this.color + ' ' + this.size;
}

// execution context chain, closure -- better encapsulation
var Apple = function () {
	var color = undefined;
	var size = undefined;
	var setColor = function (sColor) {color = sColor;}
	var getInfo = function () {return color + ' ' + size;}

	return {
		setColor: setColor,
		getInfo: getInfo
	}
}

/*
 * sorting
 */
function printArray (aTarget) {
	console.log('[' + aTarget.join(', ') + ']')
}

////////// 直接插入排序法 O(n^2)
function straightInsertSort (aTarget) { 
	if (aTarget && aTarget.length > 1) {
		for (var i = 1; i < aTarget.length; i++) {
			var iRef = aTarget[i],
				j = i - 1;
			while (iRef < aTarget[j]) {
				aTarget[j + 1] = aTarget[j];
				j--;
			}
			aTarget[j + 1] = iRef;
			printArray(aTarget);
		}
	}
}

/////////// 希尔插入排序法，由叫缩小增量排序 O(?)
function straightInsertSort2 (aTarget, iStart, iEnd) { // 改进的straightInsertSort, 可以指定排序起止位置
	if (aTarget && iEnd - iStart > 0) {
		for (var i = iStart + 1; i <= iEnd; i++) {
			var iRef = aTarget[i],
				j = i - 1;
			while (iRef < aTarget[j] && j >= iStart) {
				aTarget[j + 1] = aTarget[j];
				j--;
			}
			aTarget[j + 1] = iRef;
			//printArray(aTarget);
		}
	}
}

function shellInsertSort (aTarget) {  // 采取增量数列 d = {n/2, n/4, n/8,..., 1}
	if (aTarget && aTarget.length > 1) {
		var d = aTarget.length;
		while (d > 0) {
			d = Math.floor(d / 2);
			straightInsertSort2(aTarget, d, aTarget.length - 1);
			printArray(aTarget);
			console.log('d = ' + d);
		}
	}
}

/////////// 选择排序法 O(n^2)
function simpleSelectSort (aTarget) {
	if (aTarget && aTarget.length > 1) {
		for (var i = 0; i < aTarget.length; i++) {

			var iMinIndex = function (iStart, iEnd) {
				var iPos = iStart,
					iRetVal = iStart;
				while (iPos <= iEnd) {
					iPos++;
					iRetVal = aTarget[iPos] < aTarget[iRetVal] ? iPos : iRetVal;
				}
				return iRetVal;
			}(i, aTarget.length - 1);

			if (i != iMinIndex) {
				var iMin = aTarget[iMinIndex];
				aTarget[iMinIndex] = aTarget[i];
				aTarget[i] = iMin;
			}
			printArray(aTarget);
		}
	}
}

///////// 二元选择排序法 O(n*(n/2))
function twoSelectSort (aTarget) {
	if (aTarget && aTarget.length > 1) {
		for (var i = 0; i < Math.floor(aTarget.length / 2); i++) {

			var aMinMaxIndex = function (iStart, iEnd) {
				var iPos = iStart,
					aRetVal = [iStart, iStart];
				while (iPos < iEnd) {
					iPos++;
					aRetVal[0] = aTarget[iPos] < aTarget[aRetVal[0]] ? iPos : aRetVal[0];
					aRetVal[1] = aTarget[iPos] > aTarget[aRetVal[1]] ? iPos : aRetVal[1];
				}
				return aRetVal;
			}(i, aTarget.length - 1 - i);

			if (i != aMinMaxIndex[0]) {
				var iMin = aTarget[aMinMaxIndex[0]];
				aTarget[aMinMaxIndex[0]] = aTarget[i];
				aTarget[i] = iMin;

				if (aMinMaxIndex[1] === i) {
					aMinMaxIndex[1] = aMinMaxIndex[0]; // 发生了swap需要注意max index可能发生变化
				}
			}

			if (aTarget.length - 1 - i != aMinMaxIndex[1]) {
				var iMax = aTarget[aMinMaxIndex[1]];
				aTarget[aMinMaxIndex[1]] = aTarget[aTarget.length - 1 - i];
				aTarget[aTarget.length - 1 - i] = iMax;
			}
			
	
			printArray(aTarget);
		}
	}
}

////////// 堆选择排序 -- 大顶堆  时间复杂度计算为 O(n*logn/2 + n*logn) => O(nlogn)
function adjustHeap (aTarget, iHeapTop, length) {
	var iValue = aTarget[iHeapTop],
		iChildIndex = 2 * iHeapTop + 1; // left child as init index

	while (iChildIndex < length) {
		if (iChildIndex + 1 < length && aTarget[iChildIndex + 1] > aTarget[iChildIndex]) {
			iChildIndex++; // if right child exist, keep bigger one as iChildIndex
		}
		if (aTarget[iHeapTop] < aTarget[iChildIndex]) { // need adjust, swap and move heap top
			aTarget[iHeapTop] = aTarget[iChildIndex];
			aTarget[iChildIndex] = iValue;
			iHeapTop = iChildIndex;
			iChildIndex = iHeapTop * 2 + 1;
		} else {
			break;
		}
		printArray(aTarget);
	}
}

function buildHeap (aTarget) {
	for (var i = Math.floor(aTarget.length / 2); i >= 0; i--) {
		adjustHeap(aTarget, i, aTarget.length);
	}
}

function heapSelectSort (aTarget) {
	if (aTarget && aTarget.length > 1) {
		buildHeap(aTarget);

		for (var i = aTarget.length -1; i > 0; i--) {
			var iMax = aTarget[0];
			aTarget[0] = aTarget[i];
			aTarget[i] = iMax;
			adjustHeap(aTarget, 0, i);
		}
	}
	printArray(aTarget);
}

/////// 交换排序 - bubble sort 的基本实现
function bubbleExchangeSort (aTarget) {
	for (var i = 0; i < aTarget.length - 1; i++) {
		for (var j = 0; j < aTarget.length - i - 1; j++) {
			if (aTarget[j] > aTarget[j+1]) {
				var iTemp = aTarget[j];
				aTarget[j] = aTarget[j+1];
				aTarget[j+1] = iTemp;
				//printArray(aTarget);
			}
		}
		printArray(aTarget);
	}
}

/////// 改进冒泡，记录每趟扫描最后一个exchange position，作为新一趟扫描的终点
function bubbleExchangeSort_1 (aTarget) {
	var i = aTarget.length - 1; // i 的初始值为最后一个元素足标
	while (i > 0) {
		var pos = 0;	// 每趟扫描归零
		for (var j = 0; j < i; j++) {
			if (aTarget[j + 1] < aTarget[j]) {
				pos = j;
				var iTemp = aTarget[j];
				aTarget[j] = aTarget[j + 1];
				aTarget[j + 1] = iTemp;
				//printArray(aTarget);
			}
		}
		i = pos;  // 下一趟的终止的足标
		printArray(aTarget);
	}
}

//////// 每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半
function bubbleExchangeSort_2 (aTarget) {
	var iLow = 0,
		iHigh = aTarget.length -1,
		i, j, temp;
	while (iLow < iHigh) {
		for (i = iLow; i < iHigh; i++) {
			if (aTarget[i] > aTarget[i + 1]) {
				temp = aTarget[i];
				aTarget[i] = aTarget[i + 1];
				aTarget[i + 1] = temp;
			}
		}
		iHigh--;

		for (j = iHigh; j > iLow; j--) {
			if (aTarget[j] < aTarget[j - 1]) {
				temp = aTarget[j];
				aTarget[j] = aTarget[j - 1];
				aTarget[j - 1] = temp;
			}
		}
		iLow++;
		printArray(aTarget);
	}
}

//////// 交换排序 之 快速排序，选定基准元素后
