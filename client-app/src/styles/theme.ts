import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      'html, body': {
        bg: 'cyan.900',
        color: 'cyan.50',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
}

export const customTheme = extendTheme(theme)