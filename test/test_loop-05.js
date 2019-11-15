const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05. Напишите функцию, которая возвращает true, если номер, проходит алгоритм Луна", function(assert){
	assert.deepEqual(checkCardNumber(4316448172086813), true, "Не выполнено checkCardNumber(4316448172086813) ")
	assert.deepEqual(checkCardNumber(5656517624382346), true, "Не выполнено checkCardNumber(5656517624382346) ")
	assert.deepEqual(checkCardNumber(5720556663220720), true, "Не выполнено checkCardNumber(5720556663220720) ")
	assert.deepEqual(checkCardNumber(5160843635740044), true, "Не выполнено checkCardNumber(5160843635740044) ")
	assert.deepEqual(checkCardNumber(5852268454073868), true, "Не выполнено checkCardNumber(5852268454073868) ")
	assert.deepEqual(checkCardNumber(5175082465753545), true, "Не выполнено checkCardNumber(5175082465753545) ")

	assert.deepEqual(checkCardNumber(4716846041249), true, "Не выполнено checkCardNumber(4716846041249) ")
	assert.deepEqual(checkCardNumber(4916624715960), true, "Не выполнено checkCardNumber(4916624715960) ")
	assert.deepEqual(checkCardNumber(4532067040558), true, "Не выполнено checkCardNumber(4532067040558) ")
	assert.deepEqual(checkCardNumber(4594589882735), true, "Не выполнено checkCardNumber(4594589882735) ")
	assert.deepEqual(checkCardNumber(4532781648769), true, "Не выполнено checkCardNumber(4532781648769) ")
	assert.deepEqual(checkCardNumber(4929939629792), true, "Не выполнено checkCardNumber(4929939629792) ")

	assert.deepEqual(checkCardNumber(-5175082465753545), false, "Не выполнено checkCardNumber(-5175082465753545) ")
	assert.deepEqual(checkCardNumber(-5175082465753545), false, "Не выполнено checkCardNumber(-5175082465753545) ")
	assert.deepEqual(checkCardNumber( 2000000000000000), false, "Не выполнено checkCardNumber( 2000000000000000) ")

	assert.deepEqual(checkCardNumber(42132), false, "Не выполнено checkCardNumber(42132) ")
	assert.deepEqual(checkCardNumber(3639123823987293712378182389123785), false, "Не выполнено checkCardNumber(3639123823987293712378182389123785) ")
});


/*
(´░░░░░░ ') ░░░' ) • ┊○　 ★　
( (　`´︶´¯`︶´`´︶︶´*★ 　^v^　 ┊❅　 °☆ . 　 ☆ :. ☆ 　　
　 ) ) 　⦅‖ ͇͇ ͇͇▃▇͇͇͌̿̿⌂͇͇▌..*　★　　☆ . 　 ★ ^v^ 　°　❅ 　☆ . 　 ★ ^v^ 　°　
__̅̏̏̏̏̋̋̏̏▅̅̏̏̏̋̏_ ╱◥███████╲　ˆ...^v^ ˆˆ︵.︵...^v^︵¸ ❅　 ° ╱◥◣ 　☆ . *　★　*　
╱◥◣ ◥████◣▓∩▓∩║ 　 MERRY CHRISTMAS &　│∩ │◥███◣ ╱◥███◣
│╱◥█◣║∩∩∩ ║╲◥███╲ 　 HAPPY NEW YEAR ╱◥◣ ◥████◣▓∩▓│∩
││∩│ ▓ ║∏ 田║▓ 田田 ▓ ∩║ ii--ii-- 2019 ii--ii--ii--ii │╱◥█◣║∩∩∩ ║◥█▓ ▓█
☸๑۩๑๑۩๑๑۩๑๑۩๑๑۩๑๑۩๑๑۩„„„„„„„„☸„„„„„„„☸„„„„„„„☸๑۩๑๑۩๑๑۩๑๑۩๑๑۩๑๑۩๑๑۩
https://www.youtube.com/watch?v=E8gmARGvPlI
*/