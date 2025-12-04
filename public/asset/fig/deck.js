const CardData = [
  {
    level: 3,
    cardName: 'elephant',
    displayName: 'ぞう',
    hp: 30,
    pw: 10,
    evolution: false
  },
  {
    level: 2,
    cardName: 'cat',
    displayName: 'ねこ',
    hp: 25,
    pw: 5,
    evolution: false
  },
  {
    level: 1,
    cardName: 'dog',
    displayName: 'いぬ',
    hp: 20,
    pw: 20,
    evolution: false
  },
  {
    level: 5,
    cardName: 'lion',
    displayName: 'ライオン',
    hp: 35,
    pw: 50,
    evolution: false
  },
  {
    level: 4,
    cardName: 'rabbit',
    displayName: 'うさぎ',
    hp: 10,
    pw: 15,
    evolution: false
  }
];

// カードを表示するコンテナ要素を取得 (仮にid="card-list"とする)
const cardListContainer = document.getElementById('card-list');

// 画像のソースURLは、cardNameプロパティを利用して構築することを想定
// 例: `./images/elephant.png`

// CardDataをループしてHTML要素を生成
if (cardListContainer) {
  // 処理効率のため、一度に全てのHTMLを構築する
  const cardsHtml = CardData.map((card) => {
    // データのプロパティを抽出
    const { level, cardName, displayName, hp, pw } = card;

    // imgタグのsrc属性には、cardNameを利用したファイルパスを埋め込む
    const imageSrc = `./images/${cardName}.png`; // ファイル名が cardName + .png であると仮定

    // テンプレートリテラルを用いてHTML文字列を生成し、***をデータで置き換える
    return `
      <div class="card">
        <div class="level"><span>LEVEL</span><span>${level}</span></div>
        <div class="fig">
          <img src="${imageSrc}" alt="${displayName}">
        </div>
        <div class="displayName">${displayName}</div>
        <div class="hp">
          <span>HP</span>
          <span>${hp}</span>
        </div>
        <div class="pw">
          <span>POWER</span>
          <span>${pw}</span>
        </div>
      </div>
    `;
  }).join(''); // 配列を単一の文字列に結合

  // コンテナに生成したHTMLを挿入
  cardListContainer.innerHTML = cardsHtml;
} else {
  console.error('HTMLに id="card-list" の要素が見つかりませんでした。');
}
