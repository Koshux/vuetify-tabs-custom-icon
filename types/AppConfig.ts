import type { ThemeDefinition } from 'vuetify';

export type AppConfig = {
  theme: {
    vuetify: ThemeDefinition;
    drawer: {
      sidebar: boolean;
      customizer: boolean;
    };
    sidebar: {
      mini: boolean;
    };
    layout: 'horizontal' | 'vertical';
    font: string;
  };
};
