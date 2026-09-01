import './App.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();

  // 学習の進捗率（0～100％）
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} setProgress={setProgress} />
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </>
  )
}

export default App
