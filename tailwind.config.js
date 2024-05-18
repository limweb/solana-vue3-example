import Settings from './src/settings';

export default {
    darkMode: 'selector',
    content: [
        './index.html',
        './**/*.{vue,js,ts,jsx,tsx,blade}',
        './formkit.theme.js',
    ],
    theme: {
        extend: {
            screens: {
                sm: `${Settings.sizing.mobile}px`,
                md: `${Settings.sizing.tablet}px`,
                lg: `${Settings.sizing.laptop}px`,
                xl: `${Settings.sizing.desktop}px`,
            },
            colors: {
            grey: {
                400: '#C8C8C8',
                800: '#A5A5A5',
                900: '#666666',
          },

          background: '#EBF1F6',
          primary: {
                DEFAULT: '#5ABF91',
                content: '#CCEBDD',
                light: '#5ABF91',
                dark: '#216D61',
          },
          secondary: {
                DEFAULT: '#90D4B5',
                content: '#CCEBDD',
                light: '#CCEBDD',
                dark: '#90D4B5',

                'green': '#90D4B5',
                'green-400': '#90D4B5',
                'green-200': '#CCEBDD',
          },
          cloud: {
                DEFAULT: '#EBF1F6',
          },
          navy: {
                DEFAULT: '#1B3546',
                content: '#EBF1F6',
          },
          base: {
                400: '#F5F5F5',
                700: '#C8C8C8',
                800: '#A5A5A5',
                900: '#666666',
                content: '',
          },
          success: {
                DEFAULT: '#57E5A5',
                content: '#DDFAED',
          },
          warning: {
                DEFAULT: '#FF7E35',
                content: '#FFE5D7',
          },
          error: {
                DEFAULT: '#C7053F',
                content: '#F4CDD9',
          },
          info: {
                DEFAULT: '#3993FC',
                content: '#D7E9FE',
          },
          disabled: {
                DEFAULT: '#C8C8C8',
          },

          sidebar: {
                DEFAULT: '#1B3546',
                text: '#FFF',
                icon: '#216D61',
                selected: '#5ABF91',
                hover: '#5ABF91',
                smallNavText: '#FFF',
                smallNavSelected: '#5ABF91',
                smallNavHover: '#5ABF91',
                notification: '#C7053F',
                expand: '#5ABF91',
          },
            },
            fontFamily: {
                base: ['Asap', 'sans-serif'],
                condensed: ['Asap Condensed', 'sans-serif'],
            },
            fontSize: {
                'xs-sm': '0.8125rem',
                'sm-base': '0.9375rem',
            },
            boxShadow: {
                '100': '0 0 10px 10px rgba(0, 0, 0, 0.03)',
                '400': '0 0 10px 5px rgba(0, 0, 0, 0.20)',
                '800': '0 0 20px 10px rgba(0, 0, 0, 0.30)',
            },
            height: {
                15: '3.75rem',
            },
            minHeight: {
                15: '3.75rem',
            },
            spacing: {
                '5.5': '1.375rem',
                sidebar: '13.6875rem',
                'sidebar-small': '4.375rem',
            },
        },
    },
};