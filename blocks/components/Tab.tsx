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
        borderColor: 'transparent',
        borderRadius: 0,
        borderStyle: 'solid',
        boxShadow: 'none',
        color: 'fg.default',
        fontWeight: 'normal',
        lineHeight: '20px',
        padding: '8px 12px',
        '&:hover:not(:disabled)': {
          bg: 'transparent',
        },
        '&[data-state="active"],&[data-state="active"]:hover': {
          bg: 'canvas.subtle',
          borderColor: 'border.default',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          borderBottomColor: 'red',
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
