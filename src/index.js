const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
    // write your solution here
    let main_resualt = "";
    let reault = expr.match(/.{1,10}/g);

	reault = reault.map((char2) =>
		char2
			.match(/.{1,2}/g)
			.map(function (char2) {
				switch (char2) {
					case "00":
						return "";
					case "10":
						return ".";
					case "11":
						return "-";
					case "**":
						return " ";
				}
			})
			.join("")
			.trim()
	);

	for (char of reault)
		if (char === "") main_resualt = main_resualt + " ";
		else main_resualt = main_resualt + MORSE_TABLE[char];
	return main_resualt;
}

module.exports = {
	decode,
};
