module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'back-1': '#dbe5f4',
        'back-2': '#F6F4FC',

        c1: '#111868',
        c2: '#8014ee',
        c3: '#3080f9',
        c4: '#f86151',

        'box-c1': '#F6F5FA',
        'box-c2': '#E8F7F9',
        'box-c3': '#F6FAF3',
      },
      fontFamily: {
        f1: ['Poppins', 'sans-serif'],
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
