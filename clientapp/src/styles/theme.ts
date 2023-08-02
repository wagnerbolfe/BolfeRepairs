import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      'html, body': {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
}

export const customTheme = extendTheme(theme)