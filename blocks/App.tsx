import { type FileBlockProps } from '@githubnext/blocks'
import { BaseStyles, ThemeProvider } from '@primer/react'

import { Command } from './components/Command'
import { ErrorBoundary } from './components/ErrorBoundary'

export default function App({ content }: FileBlockProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BaseStyles className="base">
          <Command content={content} />
        </BaseStyles>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
