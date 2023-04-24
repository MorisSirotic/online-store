import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
const key = readFileSync("cert/private_key.pem");
const cert = readFileSync("cert/certificate.pem");
const ca = readFileSync("cert/certificate.csr");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key,
      cert,
      ca,
      passphrase: "Klasika123!"
    },
  },
});
