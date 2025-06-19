const MORSE_CODE: Record<string, string> = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

function decodeMorseCode(morseCode: string): string {
  morseCode = morseCode.trim();
  const decoded = [];
  const words = morseCode.split("   ");

  for (let word of words) {
    const chars = word.split(" ");

    let decodedWord = "";

    for (let char of chars) {
      decodedWord += MORSE_CODE[char];
    }

    decoded.push(decodedWord);
  }

  return decoded.join(" ");
}

console.log(decodeMorseCode("... --- ...")); // SOS
