import React from 'react';

export function MainContent({ progress = 0 }) {
  return (
    <main>
      <section>
        <h2>本教材について</h2>
        <p>本教材では、Reactの基本的な文法や概念を実践的に学びます。</p>
        <p>各章で段階的に実装を進め、Reactアプリを作っていきます。</p>
        <p>本教材を通して、Reactの基本をしっかりと身につけましょう。</p>
      </section>

      <section>
        <h3>学習の進捗状況：{progress}％</h3>
        {progress === 100 && <p>おめでとうございます！全ての学習が完了しました。</p>}
        {progress >= 50 && progress < 100 && <p>後半戦です！気を抜かずに頑張りましょう。</p>}
        {progress < 50 && <p>これからですね！小さな積み重ねが大きな成果になりますよ。</p>}
      </section>
    </main>
  );
}