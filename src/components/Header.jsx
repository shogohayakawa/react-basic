import React from 'react';

export function Header({ siteTitle = 'サイト名未設定' }) {
  // ボタンのクリック時に処理するイベントハンドラ
  const handleClick = () => {
    alert('当社では、プログラミング学習者向けにReactを活用した実践的な学習教材を提供しています。Reactの基本から応用まで、手を動かしながら学べるコンテンツを通じて、確かなスキル習得を目指せます。');
  };

  return (
    <header>
      <nav>
        <h1>{siteTitle}</h1>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#" onClick={handleClick}>会社概要</a></li>
        </ul>
      </nav>
    </header>
  );
}