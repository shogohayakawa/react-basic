import React, { useState } from 'react';

// お問い合わせフォーム用のコンポーネント
export function ContactForm() {
  // 入力データの状態管理
  const [name, setName] = useState(''); // 氏名
  const [message, setMessage] = useState(''); // お問い合わせ内容

  // 送信ボタン押下時の処理
  const handleSubmit = (event) => {
    event.preventDefault(); // フォーム送信時のリロード防止

    // 送信データのバリデーション
    if (!name.trim()) {
      alert('氏名を入力してください。');
      return;
    }
    if (!message.trim()) {
      alert('お問い合わせ内容を入力してください。');
      return;
    }

    // 送信完了メッセージをポップアップ表示
    alert(`お問い合わせを承りました。\n\n【氏名】${name}\n【内容】${message}`);

    // 入力欄のリセット
    setName('');
    setMessage('');
  };

  // フォームを構築して出力
  return (
    <section>
      <h3>お問い合わせフォーム</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">氏名：</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="氏名を入力してください"
          />
        </div>
        <br />
        <div>
          <label htmlFor="message">お問い合わせ内容：</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="お問い合わせ内容を入力してください"
            rows="4"
          />
        </div>

        <button type="submit">送信</button>
      </form>
    </section>
  );
}