function pyramid(n) {
	var res = "";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	for (var i = 0; i < n; i++){
		for (var j = n - i - 1; j > 0; j--){
			res += " ";
		}
		k = 2*i+1;
		while(k > 0){
			res += "#";
			k--;
		}
		res += "\n";
	}
	return res;
}

module.exports = pyramid;
