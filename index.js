
function diagnose() {
  const nickname = document.getElementById("nickname").value;
  const birthdate = document.getElementById("birthdate").value;
  const alphabet = document.getElementById("alphabet").value.toUpperCase();
  if (!nickname || !birthdate || !alphabet) {
    alert("全ての項目を入力してください");
    return;
  }

  document.getElementById("name-display").textContent = nickname + " さんの診断結果";

  const output = `
【数秘】
（ここに数秘6ナンバーが表示されます）

【マヤ暦】
（ここにKINなどが表示されます）

【0学】
（ここに支配星・運命期などが表示されます）
  `.trim();

  document.getElementById("output").textContent = output;
}
