import { Box, Text } from '@primer/react'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { getPkgName } from '../libs/pkg'
import { getPkgManagerCommand, pkgManagers, type PkgManager } from '../libs/pkgManager'

import { Tab } from './Tab'

export function Command({ content }: CommandProps) {
  const [selectedPkgManager, setSelectedPkgManager] = useState<PkgManager>('npm')

  const pkgName = getPkgName(content)

  function handlePkgManagerChange(pkgManager: string) {
    setSelectedPkgManager(pkgManager as PkgManager)
  }

  return (
    <Tabs.Root onValueChange={handlePkgManagerChange} value={selectedPkgManager} asChild>
      <Box>
        <Tabs.List aria-label="Select your package manager" asChild>
          <Box sx={{ borderBottom: 1, borderBottomColor: 'border.muted', borderBottomStyle: 'solid' }}>
            <Box sx={{ display: 'flex', marginBottom: '-1px' }}>
              {pkgManagers.map((pkgManager) => (
                <Tabs.Trigger key={pkgManager} asChild value={pkgManager}>
                  <Tab>{pkgManager}</Tab>
                </Tabs.Trigger>
              ))}
            </Box>
          </Box>
        </Tabs.List>
        {pkgManagers.map((pkgManager) => (
          <Tabs.Content key={pkgManager} value={pkgManager} asChild>
            <Text as={'pre'} sx={{ bg: 'canvas.subtle', fontFamily: 'mono', marginTop: 0, p: 3 }} tabIndex={-1}>
              {getPkgManagerCommand(pkgManager, pkgName)}
            </Text>
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  )
}

interface CommandProps {
  content: string
}
