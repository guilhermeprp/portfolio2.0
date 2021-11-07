import React, { useEffect } from 'react';
import './footer.scss';

export default function Footer() {
  const API_TOKEN = process.env.REACT_APP_EMAIL_API_TOKEN;
  useEffect(() => {
    console.log(API_TOKEN);
  }, []);

  return (
    <footer>
      <h3>© 2020-2021 Guilherme Pimenta All Rights Reserved</h3>
    </footer>
  );
}
