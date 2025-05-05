// import type { AppConfig } from 'types/AppConfig';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  const { theme } = useAppConfig()

  const vuetify = createVuetify({
    ssr: false,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: theme.vuetify,
      },
    },
    defaults: {
      global: {
        ripple: false,
      },
    },
  });

  app.vueApp.use(vuetify);
});
