import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hackhub-tailwind/', 
  plugins: [react()],
});
