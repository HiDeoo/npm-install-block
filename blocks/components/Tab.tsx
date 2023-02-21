import { Button } from '@primer/react'
import { forwardRef } from 'react'

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab({ children, ...props }, forwardedRef) {
  return (
    <Button
      ref={forwardedRef}
      sx={{
        bg: 'transparent',
        border: 1,
        borderBottom: 0,
        borderTop: 0,
        borderColor: 'transparent',
        borderRadius: 0,
        borderStyle: 'solid',
        boxShadow: 'none',
        color: 'fg.default',
        fontWeight: 'normal',
        lineHeight: '20px',
        padding: '8px 12px',
        '&:first-child': {
          borderLeft: 0,
        },
        '&:hover:not(:disabled)': {
          bg: 'transparent',
        },
        '&[data-state="active"],&[data-state="active"]:hover': {
          bg: 'canvas.subtle',
          borderColor: 'border.muted',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  )
})

interface TabProps {
  children: React.ReactNode
}
