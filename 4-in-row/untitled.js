
var field = new Array(7);
for (var i = 0; i < 7; i++) {
	field[i] = new Array(6);
}

function printField () {
	for (var i = 0; i < field.length; i++) {
		var str = '[';
		for (var j = 0; j < field[i].length; j++){
			str += field[i][j] + ",";
		}
		console.log(str + ']');
	}
}

function move (iColumn, color) {
	var row = field[iColumn];

	for (var i = 0; i < row.length; i++) {
		if (!row[i]) {
			row[i] = color;
			/*if (checkWin(iColumn, i, color)) {
				console.log(color + " win.");
			}*/
			return;
		}
	}

	console.error('Column ' + iColumn + ' is full.');
}

function checkWin (iColumn, iRow, color) {
	return  checkRow(iColumn, iRow, color) ||checkColumn(iColumn, iRow, color)
	 ||checkDiagnose(iColumn, iRow, color);
}

function checkRow (iColumn, iRow, color) {
	var count = 0;
	for (var i=0; i < 7; i++) {
		if (field[iColumn][i] === color) {
			count++;
		} else {
			count = 0;
		}
		if (count > 3) {
			return true;
		}
	}
	return false;
	
}

function checkColumn (iColumn, iRow, color) {
	var count = 0;
	for (var i=0; i < 6; i++) {
		if (field[i][iRow] === color) {
			count++;
		} else {
			count = 0;
		}

		if (count > 3) {
			return true;
		}
	}
	
	return false;
}

function checkDiagnose (iColumn, iRow, color) {
	var lefttop = findLefttop(iColumn, iRow);
	var bHitBound = false, count = 0;
	while (!bHitBound) {
		
		if (field[lefttop[0]][lefttop[1]] === color) {
			count++;
		} else {
			count = 0;
		}

		if (count > 3) {
			return true;
		} 

		if (lefttop[0] == 6 || lefttop[1] == 5) {
			bHitBound = true;
		}

		lefttop[0]++;
		lefttop[1]++;
	}
	
	count = 0, bHitBound = false;
	var leftbottom = findLeftBottom(iColumn, iRow);
	while (!bHitBound) {
		if (field[leftbottom[0]][leftbottom[1]] === color) {
			count++;
		} else {
			count = 0;
		}

		if (count > 3) {
			return true;
		}

		if (leftbottom[0] == 6 || leftbottom[1] == 0) {
			bHitBound = true;
		}

		leftbottom[0]++;
		leftbottom[1]--;
	}

	return false;
}

function findLefttop (iColumn, iRow) {
	var iShort = Math.min(iColumn, iRow);
	return [iColumn - iShort, iRow - iShort];
}

function findLeftBottom (iColumn, iRow) {
	var iShort = Math.min(iColumn, 5 - iRow);
	return [iColumn - iShort, iRow + iShort]; 
}