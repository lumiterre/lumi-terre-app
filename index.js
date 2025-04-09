function diagnose() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("生年月日を入力してください");
    return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);
  const key = `${year}-${month}`;
  const base = baseMap[key];

  if (base === undefined) {
    alert("この年月のデータは未対応です。");
    return;
  }

  let kin = base + (day - 1);
  if (kin > 260) kin -= 260;
  if (kin < 1) kin += 260;

  const tone = kin % 13 === 0 ? 13 : kin % 13;

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

  document.getElementById("output").textContent = `
KIN: ${kin}
太陽の紋章: ${solar}
ウェイブスペル: ${wave}
銀河の音: ${tone}
  `.trim();
}

// ← ここに baseMap を貼り付ける
