import './App.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();

  // 学習の進捗率（0～100％）
  const [progress, setProgress] = useState(0);

  // ブラウザ上部のタイトルを変更
  useEffect(() => {
    document.title = siteTitle;
  }, []); // コンポーネントの初回描画時にのみ実行

  return (
    <>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} setProgress={setProgress} />
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </>
  )
}

export default App
