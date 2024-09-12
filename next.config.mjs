/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/contingencia',
    env: {
      BASE_URL_PIRAMIDE : "https://contingencia.segurospiramide.com",
      BASE_URL_OCEANICA : "https://contingencia.oceanicadeseguros.com" 
    }
  }
export default nextConfig;
