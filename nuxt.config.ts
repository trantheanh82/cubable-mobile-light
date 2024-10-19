export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap'
        }
      ]
    }
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      'naive-ui',
      'vueuc'
    ]
  },
  pwa: {
    manifest: {
      name: 'Cubable Mobile Light',
      short_name: 'Cubable',
      description: 'Mô tả ứng dụng của bạn',
      lang: 'vi',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
    },
    workbox: {
      // Cấu hình thêm cho Workbox nếu cần
      offline: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30 ngày
            }
          }
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'assets',
          }
        }
      ]
    },
    // Cấu hình icon cho ứng dụng
    icon: {
      source: 'public/icon.png',
    }
  }
})
