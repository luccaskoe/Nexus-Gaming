import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  return {
    base: "/Nexus-Gaming/",
    plugins: [
      react({
        // Desabilita o fast refresh em produção
        fastRefresh: !isProduction,
      }),
      tailwindcss()
    ],
    server: {
      host: true,
      port: 5173
    }
  };
});
