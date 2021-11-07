import React from 'react';
import './footer.scss';

export default function Footer() {
  const API_TOKEN = process.env.REACT_APP_EMAIL_API_TOKEN;

  return (
    <footer>
      <p>{API_TOKEN}</p>
      <h3>© 2020-2021 Guilherme Pimenta All Rights Reserved</h3>
    </footer>
  );
}
