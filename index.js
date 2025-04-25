
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
ライフパス：●●
ディスティニー：●●
ソウル：●●
パーソナリティ：●●
バースデー：●●
マチュリティ：●●

【マヤ暦】
KIN：●●
太陽の紋章：●●
ウェイブスペル：●●
銀河の音：●●

【0学】
支配星：●●（陰or陽）
運命数：●●
年運：●●期
月運：●●期
日運：●●期
  `.trim();

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";
  document.getElementById("output").textContent = output;
}
