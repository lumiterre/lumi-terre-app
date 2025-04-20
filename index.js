function diagnose() {
  const nickname = document.getElementById("nickname").value;
  const birthdate = document.getElementById("birthdate").value;
  const alphabet = document.getElementById("alphabet").value.toUpperCase();
  if (!nickname || !birthdate || !alphabet) {
    alert("全ての項目を入力してください");
    return;
  }

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";

  const [year, month, day] = birthdate.split("-").map(Number);

  function reduce(num) {
    while (![11, 22, 33].includes(num) && num > 9) {
      num = num.toString().split("").reduce((a, b) => a + Number(b), 0);
    }
    return num;
  }

  const birthStr = birthdate.replace(/-/g, "");
  const lifePath = reduce(Number(birthStr));
  const destiny = reduce(alphabet.split("").reduce((sum, ch) => sum + (ch.charCodeAt(0) - 64), 0));
  const soul = reduce(alphabet.match(/[AEIOU]/gi)?.reduce((sum, ch) => sum + (ch.charCodeAt(0) - 64), 0) || 0);
  const personality = reduce(alphabet.match(/[^AEIOU]/gi)?.reduce((sum, ch) => sum + (ch.charCodeAt(0) - 64), 0) || 0);
  const birthdayNum = reduce(day);
  const maturity = reduce(lifePath + destiny);

  const baseMap = {
    "1976-2": 1, "1980-5": 1, "1985-9": 111, "1990-7": 35,
    "1993-12": 1, "1996-6": 144, "2000-1": 153, "2004-11": 82,
    "2010-3": 206, "2015-8": 118
  };
  const key = `${year}-${month}`;
  let kin = baseMap[key] ? baseMap[key] + (day - 1) : 14;
  if (kin > 260) kin -= 260;

  const solarSigns = [
    "赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇", "白い世界の橋渡し", "青い手", "黄色い星",
    "赤い月", "白い犬", "青い猿", "黄色い人", "赤い空歩く者", "白い魔法使い", "青い鷲", "黄色い戦士",
    "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
  ];
  const solar = solarSigns[(kin - 1) % 20];

  const waveSpells = [
    [1, 13, "赤い龍"], [14, 26, "白い魔法使い"], [27, 39, "青い手"], [40, 52, "黄色い太陽"],
    [53, 65, "赤い空歩く者"], [66, 78, "白い世界の橋渡し"], [79, 91, "青い嵐"], [92, 104, "黄色い人"],
    [105, 117, "赤い蛇"], [118, 130, "白い鏡"], [131, 143, "青い猿"], [144, 156, "黄色い種"],
    [157, 169, "赤い地球"], [170, 182, "白い犬"], [183, 195, "青い夜"], [196, 208, "黄色い戦士"],
    [209, 221, "赤い月"], [222, 234, "白い風"], [235, 247, "青い鷲"], [248, 260, "黄色い星"]
  ];
  const wave = waveSpells.find(([start, end]) => kin >= start && kin <= end)?.[2] || "不明";
  const tone = kin % 13 === 0 ? 13 : kin % 13;

  const zeroStar = "火星";
  const yinYang = (year % 2 === 0) ? "陽" : "陰";
  const fateNum = (year + month + day) % 60 || 60;
  const yearFortune = "誕生期";
  const monthFortune = "背信期";
  const dayFortune = "0地点";

  document.getElementById("output").textContent = `
【数秘】
ライフパス：${lifePath}
ディスティニー：${destiny}
ソウル：${soul}
パーソナリティ：${personality}
バースデー：${birthdayNum}
マチュリティ：${maturity}

【マヤ暦】
KIN：${kin}
太陽の紋章：${solar}
ウェイブスペル：${wave}
銀河の音：${tone}

【0学】
支配星：${zeroStar}（${yinYang}）
運命数：${fateNum}
年運：${yearFortune}
月運：${monthFortune}
日運：${dayFortune}
  `.trim();
}
