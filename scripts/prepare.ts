import { cp, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { generateAudio } from './audio'
import { outputDir, projectDir, publicDir } from './paths'

export async function prepareAssets() {
  await mkdir(publicDir, { recursive: true })
  await mkdir(outputDir, { recursive: true })
  await cp(path.join(projectDir, 'public'), publicDir, { recursive: true })
  await generateAudio(path.join(publicDir, 'audio'))
}
