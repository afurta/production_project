import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} >
        <div>
          {story()}
        </div>
      </div>
    </ThemeProvider>
  )
}
