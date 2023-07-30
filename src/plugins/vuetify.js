// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#F0c20A',
    secondary: '#789e4f',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
export default createVuetify({
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
      },
    },
  }
)
