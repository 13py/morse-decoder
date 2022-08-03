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
    let text = "";
    for (let i of expr.split("**********")) {
        let current = "";
        let tempWord = "";
        let num = 0;

        for (let x = 0; x <= i.length; x += 2) {
            current = i[x] + i[x + 1];
            if (current == "10") {
                tempWord += ".";
            } else if (current == "11") {
                tempWord += "-";
            }
            num++;
            if (num == 5) {
                text += MORSE_TABLE[tempWord];
                tempWord = "";
                num = 0;
            }
        }
        text += " ";
    }
    return text.slice(0, text.length - 1);
}

module.exports = {
    decode,
};