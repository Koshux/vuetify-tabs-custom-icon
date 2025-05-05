import type { AppConfig } from 'types/AppConfig';

export default defineAppConfig<AppConfig>({
  theme: {
    drawer: {
      sidebar: true,
      customizer: false,
    },
    sidebar: {
      mini: false,
    },
    layout: 'horizontal',
    font: 'Roboto',
    vuetify: {
      dark: false,
      colors: {
        primary: '#4090cf',
        background: '#fcfcfc',
        secondary: '#5B6B79',
        info: '#3ec9d6',
        success: '#2ca87f',
        warning: '#e58a00',
        error: '#dc2626',
        'deep-purple-accent-4': '#6200EA',
      },
    },
  },
});
