import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //serve on different server
 server:{
  allowedHosts:["07634e335186.ngrok-free.app"]
}

})
