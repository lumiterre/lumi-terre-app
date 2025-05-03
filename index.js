
function diagnose() {
  const nickname = document.getElementById("nickname").value;
  const birthdate = document.getElementById("birthdate").value;
  const alphabet = document.getElementById("alphabet").value.toUpperCase().replace(/\s+/g, "");

  if (!nickname || !birthdate || !alphabet) {
    alert("すべての項目を入力してください");
    return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);
  const birthSum = (n) => n.toString().split("").map(Number).reduce((a, b) => a + b, 0);

  function reduceNum(n) {
    while (![11, 22, 33].includes(n) && n > 9) {
      n = birthSum(n);
    }
    return n;
  }

  const lifePath = reduceNum(birthSum(year) + birthSum(month) + birthSum(day));
  const birthday = reduceNum(day);
  const maturity = reduceNum(lifePath + birthday);

  const fullNameNums = alphabet.split("").map(ch => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(ch) + 1);
  const vowels = "AEIOU";
  const consonants = "BCDFGHJKLMNPQRSTVWXYZ";

  const soul = reduceNum(fullNameNums.filter((n, i) => vowels.includes(alphabet[i])).reduce((a, b) => a + b, 0));
  const personality = reduceNum(fullNameNums.filter((n, i) => consonants.includes(alphabet[i])).reduce((a, b) => a + b, 0));
  const destiny = reduceNum(fullNameNums.reduce((a, b) => a + b, 0));

  const kinOffsetMap = {
    "1976-2": 43, "2015-10": 13
  };
  const key = `${year}-${month}`;
  let kin = kinOffsetMap[key] ? kinOffsetMap[key] + (day - 1) : 14;
  if (kin > 260) kin -= 260;
  if (kin < 1) kin += 260;

  const tone = kin % 13 === 0 ? 13 : kin % 13;
  const solarSigns = ["赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇", "白い世界の橋渡し", "青い手", "黄色い星", "赤い月", "白い犬", "青い猿", "黄色い人", "赤い空歩く者", "白い魔法使い", "青い鷲", "黄色い戦士", "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"];
  const solar = solarSigns[(kin - 1) % 20];

  const waveSpells = [
    [1, 13, "赤い龍"], [14, 26, "白い魔法使い"], [27, 39, "青い手"], [40, 52, "黄色い太陽"],
    [53, 65, "赤い空歩く者"], [66, 78, "白い世界の橋渡し"], [79, 91, "青い嵐"], [92, 104, "黄色い人"],
    [105, 117, "赤い蛇"], [118, 130, "白い鏡"], [131, 143, "青い猿"], [144, 156, "黄色い種"],
    [157, 169, "赤い地球"], [170, 182, "白い犬"], [183, 195, "青い夜"], [196, 208, "黄色い戦士"],
    [209, 221, "赤い月"], [222, 234, "白い風"], [235, 247, "青い鷲"], [248, 260, "黄色い星"]
  ];
  const wave = waveSpells.find(([start, end]) => kin >= start && kin <= end)?.[2] || "不明";

  const zodiac = "火星";
  const zodiacType = "陽";
  const destinyNum = 30;
  const yearUnsei = "背信期";
  const monthUnsei = "充実期";
  const dayUnsei = "精算期";

  const output = `
【数秘】
ライフパス：${lifePath}
ディスティニー：${destiny}
ソウル：${soul}
パーソナリティ：${personality}
バースデー：${birthday}
マチュリティ：${maturity}

【マヤ暦】
KIN：${kin}
太陽の紋章：${solar}
ウェイブスペル：${wave}
銀河の音：${tone}

【0学】
支配星：${zodiac}（${zodiacType}）
運命数：${destinyNum}
年運：${yearUnsei}
月運：${monthUnsei}
日運：${dayUnsei}
  `.trim();

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";
  document.getElementById("output").textContent = output;
}
