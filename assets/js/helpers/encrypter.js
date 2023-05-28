export const Encrypter = (text) => {
  const dictWord = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < dictWord.length; i++) {
    if (text.includes(dictWord[i][0])) {
      text = text.replaceAll(dictWord[i][0], dictWord[i][1]);
    }
  }

  return text.trim();
};

export const Decrypt = (text) => {
  const dictWord = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < dictWord.length; i++) {
    if (text.includes(dictWord[i][1])) {
      text = text.replaceAll(dictWord[i][1], dictWord[i][0]);
    }
  }
  return text;
};
