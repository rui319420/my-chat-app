// 'use client' は、ブラウザで動くインタラクティブな機能(ボタンクリックなど)を使うためのおまじないです
'use client';

// Reactから「useState」という機能を使います
import { useState } from 'react';

export default function Home() {
  // 1. 「状態 (State)」を定義します
  // message: 入力中のメッセージを保持する変数
  // setMessage: message変数を更新するための「専用関数」
  const [message, setMessage] = useState('');

  // messageList: 送信されたメッセージの履歴を保持する配列
  // setMessageList: messageListを更新するための「専用関数」
  // <string[]> は TypeScriptの機能で、「これは文字列の配列ですよ」と型を教えています
  const [messageList, setMessageList] = useState<string[]>([]);

  // 3. フォームが送信されたとき（ボタンが押されたとき）に実行される関数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // フォーム送信時の「ページ再読み込み」を防ぎます
    e.preventDefault();

    // 入力が空の場合は何もしない
    if (!message.trim()) return;

    // 4. メッセージ履歴を更新する
    // ...messageList は「今までの履歴すべて」という意味です
    // これに新しい message を追加した「新しい配列」で状態を更新します
    setMessageList([...messageList, message]);

    // 5. APIにメッセージを送信する（ステップ3で詳しく説明します）
    console.log('送信するメッセージ:', message);

    // 6. 入力欄を空にする
    setMessage('');
  };

  // 2. 画面に表示する内容 (JSX)
  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto p-4">
      <header className="border-b mb-4 pb-2">
        <h1 className="text-2xl font-bold">My Chat App</h1>
      </header>

      {/* メッセージ表示エリア */}
      <main className="flex-1 overflow-y-auto mb-4 p-2 bg-zinc-100 rounded">
        {/* 7. メッセージ履歴を画面に表示する */}
        {messageList.map((msg, index) => (
          <div key={index} className="p-2 my-1 bg-white rounded shadow-sm">
            {msg}
          </div>
        ))}
      </main>

      {/* メッセージ入力フォーム */}
      <footer className="mt-auto">
        {/* 3. formが送信(submit)されたら handleSubmit 関数を呼ぶ */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded text-black"
            placeholder="メッセージを入力..."
            // 8. 入力欄の値を message 状態と「同期」させます
            value={message}
            // 9. ユーザーが入力するたびに message 状態を更新します
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            送信
          </button>
        </form>
      </footer>
    </div>
  );
}