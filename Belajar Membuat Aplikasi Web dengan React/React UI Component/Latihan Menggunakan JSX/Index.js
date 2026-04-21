// [1/]Latihan Menggunakan JSX 19 april 2026
import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './dicoding-logo.png';

const element = (
  <div>
    <h1>Biodata Asyam Tapi versi React</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      <img src="dicoding-logo.png" alt="logo dicoding" />
      <img src={DicodingLogo} alt="Dicoding logonya" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
