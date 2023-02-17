import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { getPkgName } from '../libs/pkg'
import { getPkgManagerCommand, pkgManagers, type PkgManager } from '../libs/pkgManager'

export function Command({ content }: CommandProps) {
  const [selectedPkgManager, setSelectedPkgManager] = useState<PkgManager>('npm')

  const pkgName = getPkgName(content)

  function handlePkgManagerChange(pkgManager: string) {
    setSelectedPkgManager(pkgManager as PkgManager)
  }

  return (
    <Tabs.Root value={selectedPkgManager} onValueChange={handlePkgManagerChange}>
      <Tabs.List aria-label="Select your package manager">
        {pkgManagers.map((pkgManager) => (
          <Tabs.Trigger key={pkgManager} value={pkgManager}>
            {pkgManager}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {pkgManagers.map((pkgManager) => (
        <Tabs.Content key={pkgManager} value={pkgManager}>
          {getPkgManagerCommand(pkgManager, pkgName)}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

interface CommandProps {
  content: string
}
