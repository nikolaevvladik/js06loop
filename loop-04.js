/*
Напишите функцию pyramid(n), которая возвращает текстовую
пирамиду из решеток и пробелов  высоты n(1⩽n⩽20),например
для n=3 функция должна вернуть три сцепленных строки:
  # 
 ### 
#####
т.е.строку #\n ###\n#####. 
*/
function pyramid(n) {
	a = " ";
	b = "#";
	c = "\n";
	s = "";
	for(i = 0; i < n; i++) {
		for(j = 0; j < n - i - 1; j++) { //цикл добавления пробелов
			s += a;
		}
		for(j = 0; j < 2 * i + 1; j++) { //цикл добавления #
			s += b;
		}
		if (i < n -1) s += c;
	}
	return s;
}

module.exports = pyramid;