
function diagnose() {
  const birthdate = document.getElementById("birthdate").value;
  const nameAlpha = document.getElementById("alphabetName").value.toUpperCase().replace(/[^A-Z]/g, "");
  const nickname = document.getElementById("nickname").value;
  if (!birthdate || !nameAlpha) {
    alert("すべての情報を入力してください");
    return;
  }

  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const letterMap = { A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
                      J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
                      S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8 };

  function reduce(num) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
  }

  function getSum(name, condition) {
    return name.split("").filter(condition).reduce((sum, ch) => sum + (letterMap[ch] || 0), 0);
  }

  const [year, month, day] = birthdate.split("-").map(Number);
  const birthSum = reduce(year) + reduce(month) + reduce(day);
  const lifePath = reduce(birthSum);
  const birthday = reduce(day);
  const destiny = reduce(getSum(nameAlpha, ch => true));
  const soul = reduce(getSum(nameAlpha, ch => vowels.includes(ch)));
  const personality = reduce(getSum(nameAlpha, ch => !vowels.includes(ch)));
  const maturity = reduce(lifePath + destiny);

  // チャレンジナンバー
  const y = reduce(year);
  const m = reduce(month);
  const d = reduce(day);
  const ch1 = Math.abs(m - d);
  const ch2 = Math.abs(d - y);
  const ch3 = Math.abs(ch1 - ch2);
  const ch4 = Math.abs(m - y);

  const today = new Date();
  const birthDateObj = new Date(birthdate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const hasHadBirthday = today.getMonth() > birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());
  if (!hasHadBirthday) age--;

  let currentChallenge = "";
  if (age < 28) currentChallenge = `第1チャレンジ：${ch1}`;
  else if (age < 37) currentChallenge = `第2チャレンジ：${ch2}`;
  else if (age < 46) currentChallenge = `第3チャレンジ：${ch3}`;
  else currentChallenge = `第4チャレンジ：${ch4}`;

  document.getElementById("output").textContent = `
【${nickname} さんの診断結果】

●数秘ナンバー
ライフパス：${lifePath}
ディスティニー：${destiny}
ソウル：${soul}
パーソナリティ：${personality}
バースデー：${birthday}
マチュリティ：${maturity}

●チャレンジナンバー
第1チャレンジ：${ch1}
第2チャレンジ：${ch2}
第3チャレンジ：${ch3}
第4チャレンジ：${ch4}
▶︎ 今のあなたが向き合う課題は：${currentChallenge}
`.trim();
}
