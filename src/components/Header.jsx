import React from 'react';

export function Header({ siteTitle = 'サイト名未設定' }) {

  return (
    <header>
      <nav>
        <h1>{siteTitle}</h1>
        <ul>
          <li><a href="#">HOME</a></li>
        </ul>
      </nav>
    </header>
  );
}