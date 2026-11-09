import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// rachel-w3.github.io is a user site, so it is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
