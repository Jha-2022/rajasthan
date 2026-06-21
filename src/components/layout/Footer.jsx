import React from 'react';

export default function Footer() {
  return (
    <footer className="rj-footer">
      <div className="rj-wrap">
        <p>© {new Date().getFullYear()} Rajasthan · The Land of Kings — a cultural tribute site.</p>
        <p style={{ marginTop: 6, opacity: 0.7 }}>
          Photography courtesy of Wikimedia Commons contributors, licensed under Creative Commons (CC BY-SA).
        </p>
      </div>
    </footer>
  );
}
