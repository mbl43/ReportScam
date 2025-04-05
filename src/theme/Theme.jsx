// ThemeToggle.jsx
import { useEffect, useState } from 'react';

export default function Theme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);

  return (
    <button className="btn fs-5" onClick={() => setDark(!dark)}>
      {dark ? '🌞' : '🌙'}
    </button>
  );
}
