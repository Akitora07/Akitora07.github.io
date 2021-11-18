"use strict";

{
  // 与えた配列からランダムに要素を抜き出すシステムの作成
  function createClumn(array) {
    const selectedNumbers = [];
    for ( let i = 0 ; i < 5 ; i++ ) {
      const num = Math.floor(Math.random() * array.length);
      const pushedNumber = array.splice(num, 1);
      if (!pushedNumber) {
        i -= 1;
        continue;
      }
      selectedNumbers.push(...pushedNumber);
    }
    return selectedNumbers;
  }

  // 元となる配列を作成
  const numbers = [];
  for ( let i = 1 ; i <= 15 ; i++ ) {
    numbers.push(i);
  }

  // ビンゴシートに入力する値の作成
  const columns = [];
  for ( let i = 0 ; i < 5 ; i++ ) {
    const selectedNumbers = createClumn(numbers.map(n => n + 15 * i))
    columns.push(selectedNumbers);
  }
  columns[2][2] = "FREE";

  // ビンゴシートに値を入れる
  function insertNumber(columnNumber) {
    for ( let i = 0 ; i < 5 ; i++ ) {
      const td = document.createElement("td");
      td.textContent = columns[columnNumber][i];
      document.querySelectorAll("tbody > tr")[i].appendChild(td);
    }
  }

  for ( let i = 0 ; i < 5 ; i++ ) {
    insertNumber(i)
  }

  // ビンゴ機能  
  document.querySelectorAll("td").forEach((td)=>{
    td.addEventListener("mouseup", ()=>{
      td.classList.add("yellow")
    })
  })
}
