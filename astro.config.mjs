import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; //Dependecia de Tailwind-👾 
import react from "@astrojs/react";//Dependecia de React-👾

// https://astro.build/config
export default defineConfig({
    // Cambia USERNAME y REPO_NAME por los tuyos
  site: 'https://brayanSramos.github.io/Mi-Porfolio',
  base: '/Mi-Porfolio/',    // importante para que los assets y rutas usen /REPO_NAME/
  output: 'static',
  integrations: [tailwind(), //Configuracion de Tailwind-👾
  react(),
  ]
});
