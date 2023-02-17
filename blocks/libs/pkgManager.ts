export const pkgManagers = ['npm', 'yarn', 'pnpm', 'bun', 'ni'] as const

const pkgManagerCommands: Record<PkgManager, PkgManagerCommand> = {
  npm: { text: 'npm i' },
  yarn: { text: 'yarn add' },
  pnpm: { text: 'pnpm add' },
  bun: { text: 'bun add' },
  ni: { text: 'ni' },
}

export function getPkgManagerCommand(pkgManager: PkgManager, dependency: string) {
  const command = pkgManagerCommands[pkgManager]

  return `${command.text} ${dependency}`
}

export type PkgManager = (typeof pkgManagers)[number]

interface PkgManagerCommand {
  text: string
}
