
function diagnose() {
  const nickname = document.getElementById("nickname").value;
  const birthdate = document.getElementById("birthdate").value;
  const alphabet = document.getElementById("alphabet").value.toUpperCase();

  if (!nickname || !birthdate || !alphabet) {
    alert("全ての項目を入力してください");
    return;
  }

  const output = `
【数秘】
ライフパス：9
ディスティニー：9
ソウル：7
パーソナリティ：2
バースデー：11
マチュリティ：9

【マヤ暦】
KIN：14
太陽の紋章：白い魔法使い
ウェイブスペル：白い魔法使い
銀河の音：1

【0学】
支配星：火星（陽）
運命数：30
年運：背信期
月運：充実期
日運：精算期
  `.trim();

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";
  document.getElementById("output").textContent = output;
}
