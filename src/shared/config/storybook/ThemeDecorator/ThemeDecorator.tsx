import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => {
  return (
    <div className={`app ${theme}`} >
      <div>
        {story()}
      </div>
    </div>
  )
}
