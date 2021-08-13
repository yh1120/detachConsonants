const Cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const Jung = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const Jong = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

function findHangul(string) {
  function isHangul(word) {
    return word.charCodeAt(0) - 0xac00;
  }

  function validateHangul(string) {
    for (let i = 0; i < string.length; i++) {
      const word = string[i];
      if (Cho.includes(word)) {
        Language.Cho[word] += 1;
        continue;
      }
      const unit = isHangul(word);
      if (unit >= isHangul("가") && unit <= isHangul("힣")) {
        const first = ((unit - (unit % 28)) / 28 - (((unit - (unit % 28)) / 28) % 21)) / 21;
        const third = unit % 28;
        Language.Cho[Cho[first]] += 1;
        if (Jong[third]) {
          const temp = Language.Jong[Jong[third]];
          temp.map((part) => {
            Language.Cho[part] += 1;
          });
        }
      }
    }
    console.log(Language.Cho);
  }

  const Language = {
    Cho: {
      ㄱ: 0,
      ㄲ: 0,
      ㄴ: 0,
      ㄷ: 0,
      ㄸ: 0,
      ㄹ: 0,
      ㅁ: 0,
      ㅂ: 0,
      ㅃ: 0,
      ㅅ: 0,
      ㅆ: 0,
      ㅇ: 0,
      ㅈ: 0,
      ㅉ: 0,
      ㅊ: 0,
      ㅋ: 0,
      ㅌ: 0,
      ㅍ: 0,
      ㅎ: 0,
    },
    Jong: {
      "": 0,
      ㄱ: ["ㄱ"],
      ㄲ: ["ㄲ"],
      ㄳ: ["ㄱ", "ㅅ"],
      ㄴ: ["ㄴ"],
      ㄵ: ["ㄴ", "ㅈ"],
      ㄶ: ["ㄴ", "ㅎ"],
      ㄷ: ["ㄷ"],
      ㄹ: ["ㄹ"],
      ㄺ: ["ㄹ", "ㄱ"],
      ㄻ: ["ㄹ", "ㅁ"],
      ㄼ: ["ㄹ", "ㅂ"],
      ㄽ: ["ㄹ", "ㅅ"],
      ㄾ: ["ㄹ", "ㅌ"],
      ㄿ: ["ㄹ", "ㅍ"],
      ㅀ: ["ㄹ", "ㅎ"],
      ㅁ: ["ㅁ"],
      ㅂ: ["ㅂ"],
      ㅄ: ["ㅂ", "ㅅ"],
      ㅅ: ["ㅅ"],
      ㅆ: ["ㅆ"],
      ㅇ: ["ㅇ"],
      ㅈ: ["ㅈ"],
      ㅊ: ["ㅊ"],
      ㅋ: ["ㅋ"],
      ㅌ: ["ㅌ"],
      ㅍ: ["ㅍ"],
      ㅎ: ["ㅎ"],
    },
  };
  validateHangul(string);
}

findHangul("ㄱ");
findHangul("가");
findHangul("힣");
findHangul("안녕하세요");
findHangul("안녕하ㅁㅁㅁㅁㅁ121312451세요asdfasdf11123123sdaf");
findHangul("사과1호랑이,고니 수박BT닭");
findHangul("잆걶돓됝낢?");
findHangul("까싸또삐짜");
findHangul("");
