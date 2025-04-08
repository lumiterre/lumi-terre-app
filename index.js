
const form = document.createElement("form");
form.innerHTML = `
  <h2>Lumi Terre 診断アプリ</h2>
  <input id="birthdate" type="date" placeholder="生年月日"><br>
  <input id="name" type="text" placeholder="ローマ字氏名"><br>
  <button type="button" id="calcBtn">診断する</button>
  <pre id="result"></pre>
  <button type="button" id="saveBtn">保存する</button>
`;
document.body.appendChild(form);

function sumDigits(num) {
  while (![11, 22, 33].includes(num) && num > 9) {
    num = num.toString().split("").reduce((a, b) => a + Number(b), 0);
  }
  return num;
}

function getNameValue(name, filterFn) {
  const vowels = "AEIOU";
  const values = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  return sumDigits(
    name.toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .filter(filterFn)
      .reduce((sum, c) => sum + (values[c] || 0), 0)
  );
}

document.getElementById("calcBtn").onclick = () => {
  const birthdate = document.getElementById("birthdate").value;
  const name = document.getElementById("name").value;
  const [year, month, day] = birthdate.split("-").map(Number);
  const lp = sumDigits(sumDigits(year) + sumDigits(month) + sumDigits(day));
  const bday = sumDigits(day);
  const destiny = getNameValue(name, () => true);
  const soul = getNameValue(name, c => "AEIOU".includes(c));
  const pers = getNameValue(name, c => !"AEIOU".includes(c));
  const maturity = sumDigits(lp + destiny);

  const baseDate = new Date("1920-07-26");
  const diffDays = Math.floor((new Date(birthdate) - baseDate) / (1000 * 60 * 60 * 24));
  const kin = (diffDays % 260 + 260) % 260 + 1;
  const solarSigns = [
    "赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇",
    "白い世界の橋渡し", "青い手", "黄色い星", "赤い月", "白い犬",
    "青い猿", "黄色い人", "赤い空歩く者", "白い魔法使い", "青い鷲",
    "黄色い戦士", "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
  ];
  const tone = kin % 13 === 0 ? 13 : kin % 13;
  const solar = solarSigns[(kin - 1) % 20];
  const wave = solarSigns[Math.floor((kin - 1) / 20) % 20];

  const resultText = `
ライフパス: ${lp}
ディスティニー: ${destiny}
ソウル: ${soul}
パーソナリティ: ${pers}
バースデー: ${bday}
マチュリティ: ${maturity}
KIN: ${kin}
太陽の紋章: ${solar}
ウェイブスペル: ${wave}
銀河の音: ${tone}
  `;
  document.getElementById("result").textContent = resultText.trim();
};

document.getElementById("saveBtn").onclick = async () => {
  const birthdate = document.getElementById("birthdate").value;
  const name = document.getElementById("name").value;
  const resultText = document.getElementById("result").textContent;
  const lines = resultText.split("\n");
  const data = {
    name,
    birthdate,
    lifePath: lines[0].split(': ')[1],
    destiny: lines[1].split(': ')[1],
    soul: lines[2].split(': ')[1],
    personality: lines[3].split(': ')[1],
    birthday: lines[4].split(': ')[1],
    maturity: lines[5].split(': ')[1],
    kin: lines[6].split(': ')[1],
    solar: lines[7].split(': ')[1],
    wave: lines[8].split(': ')[1],
    tone: lines[9].split(': ')[1]
  };

  await fetch("YOUR_SCRIPT_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  });
  alert("スプレッドシートに保存しました！");
};
