
function diagnose() {
  const nickname = document.getElementById("nickname").value.trim();
  const birthdate = document.getElementById("birthdate").value.trim();
  const alphabet = document.getElementById("alphabet").value.toUpperCase().replace(/\s+/g, "");

  if (!nickname || !birthdate || !alphabet) {
    alert("全ての項目を入力してください");
    return;
  }

  const vowels = "AEIOUY";
  const consonants = "BCDFGHJKLMNPQRSTVWXZ";
  const numMap = {
    A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
    J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
    S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
  };

  const nameNums = alphabet.split("").map(ch => numMap[ch] || 0);
  const vowelNums = alphabet.split("").map((ch, i) => vowels.includes(ch) ? numMap[ch] : 0).filter(n => n > 0);
  const consonantNums = alphabet.split("").map((ch, i) => consonants.includes(ch) ? numMap[ch] : 0).filter(n => n > 0);

  function reduceNum(n) {
    const master = [11, 22, 33];
    while (!master.includes(n) && n > 9) {
      n = n.toString().split("").map(Number).reduce((a, b) => a + b, 0);
    }
    return n;
  }

  const destiny = reduceNum(nameNums.reduce((a, b) => a + b, 0));
  const soul = reduceNum(vowelNums.reduce((a, b) => a + b, 0));
  const personality = reduceNum(consonantNums.reduce((a, b) => a + b, 0));

  const [year, month, day] = birthdate.split("-").map(Number);
  const birthTotal = year.toString().split("").concat(month.toString().split("")).concat(day.toString().split(""))
    .map(Number).reduce((a, b) => a + b, 0);
  const lifePath = reduceNum(birthTotal);
  const birthday = reduceNum(day);
  const maturity = reduceNum(lifePath + destiny);

  const output = `
【数秘】
ライフパス：${lifePath}
ディスティニー：${destiny}
ソウル：${soul}
パーソナリティ：${personality}
バースデー：${birthday}
マチュリティ：${maturity}
`.trim();

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";
  document.getElementById("output").textContent = output;
}
