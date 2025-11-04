import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use your GitHub Pages repo name as the base so assets load correctly
export default defineConfig({
  plugins: [react()],
  base: '/vaibhav-portfolio/',
});
