// Utilizando ECMAScript Modules (ESM)

// Importa el módulo 'flowbite/plugin' usando 'import'
import flowbitePlugin from 'flowbite/plugin';

// Exporta la configuración utilizando 'export'
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [flowbitePlugin], // Utiliza el módulo importado aquí
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  // Si hay configuraciones específicas de tema para Flowbite, agréguelas aquí
};