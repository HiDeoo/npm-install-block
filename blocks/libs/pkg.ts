import { type PackageJson } from 'type-fest'

export function getPkgName(pkg: string) {
  try {
    const json = JSON.parse(pkg)

    if (!isValidPkgWithName(json)) {
      throw new Error('Failed to find package name in package.json.')
    }

    return json.name
  } catch (error) {
    throw new Error('Failed to parse package.json.', { cause: error })
  }
}

function isValidPkgWithName(json: unknown): json is PackageJsonWithName {
  return typeof json === 'object' && typeof (json as PackageJson).name === 'string'
}

type PackageJsonWithName = PackageJson & { name: string }
