function diagnose() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("生年月日を入力してください");
    return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);
  const baseMap = {
    "1976-2": 3,
    "1980-5": -8,
    "1985-9": 120,
    "1990-7": 63,
    "1993-12": 11,
    "1996-6": 143,
    "2000-1": 152,
    "2004-11": 96,
    "2010-3": 221,
    "2015-8": 119
  };

  const key = `${year}-${month}`;
  const base = baseMap[key];
  if (base === undefined) {
    alert("この年と月の組み合わせはまだ対応していません！");
    return;
  }

  let kin = base + day;
  if (kin > 260) kin -= 260;
  if (kin < 1) kin += 260;

  const tone = kin % 13 === 0 ? 13 : kin % 13;
  const solarSigns = [
    "赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇", "白い世界の橋渡し", "青い手", "黄色い星",
    "赤い月", "白い犬", "青い猿", "黄色い人", "赤い空歩く者", "白い魔法使い", "青い鷲", "黄色い戦士",
    "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
  ];
  const waveSpells = [
    "赤い龍", "白い魔法使い", "青い手", "黄色い太陽", "赤い蛇", "白い世界の橋渡し", "青い猿", "黄色い種",
    "赤い月", "白い犬", "青い鷲", "黄色い人", "赤い空歩く者", "白い鏡", "青い夜", "黄色い戦士",
    "赤い地球", "白い風", "青い嵐", "黄色い星"
  ];

  const solar = solarSigns[(kin - 1) % 20];
  const wave = waveSpells[Math.floor((kin - 1) / 13)];

  document.getElementById("output").textContent = `
KIN: ${kin}
太陽の紋章: ${solar}
ウェイブスペル: ${wave}
銀河の音: ${tone}
  `.trim();
}
