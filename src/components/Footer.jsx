import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const siteTitle = 'Reactの基礎を学ぼう';

  return (
    <footer>
      <p>&copy; {currentYear} {siteTitle}</p>
    </footer>
  );
}