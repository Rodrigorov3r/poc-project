import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: 'poc-project',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
          "name": "SPA-Fichadas-MiAndreani",
          "theme_color": "#000000",
          "background_color": "#ffffff",
          "short_name": "SPA-Fichadas-MiAndreani",
          "id": "SPA-Fichadas-MiAndreani-PocWidget-",
          "description": "POC Widget de Fichadas Mi Andreani",
          "start_url": "/",
          "display": "standalone",
          "orientation": "any", 
        "screenshots": [
          {
            "src": "/screenshots/desktop.png",
            "sizes": "1806x821",
            "type": "image/png",
            "form_factor": "wide"
          },
          {
            "src": "/screenshots/mobile.png",
            "sizes": "462x762",
            "type": "image/png"
          }
          ],
          "icons":[
            {
              "src":"/mi_andreani_192.png",
              "sizes":"192x192",
              "type":"image/png"
            },
            {
              "src":"/mi_andreani_256.png",
              "sizes":"256x256",
              "type":"image/png"
            },
            {
              "src":"/mi_andreani_384.png",
              "sizes":"384x384",
              "type":"image/png"
            },
            {
              "src":"/mi_andreani_512.png",
              "sizes":"512x512",
              "type":"image/png"
            }
          ],
          "categories": [
            "utilities"
          ],
          "edge_side_panel": {
            "preferred_width": 400
          }
      },
    }),
  ],
});
