// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  settings: {
    'import/resolver': {
      node: {
        paths: ['../utils/*'],
        extensions: ['.js', '.ts', '.mjs', '.vue'],
      },
    },
  },
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Add this line if you want to disable any type warnings
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
  }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/valid-v-slot': [
        'error',
        {
            allowModifiers: true
        }
    ],
    'vue/no-v-html': 'off'
  },
})
