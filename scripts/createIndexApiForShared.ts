import { Project } from 'ts-morph'
import path from 'path'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const sharedLayerPath = path.resolve(__dirname, '..', 'src', 'shared', 'ui')
const sharedLayerDir = project.getDirectory(sharedLayerPath)
const componentsDirs = sharedLayerDir?.getDirectories()

componentsDirs?.forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`
  const indexFile = dir.getSourceFile(indexFilePath)

  if (!indexFile) {
    const codeTemplate = `export * from './${dir.getBaseName()}'`
    dir.createSourceFile(indexFilePath, codeTemplate, { overwrite: true })
    project.save()
  }
})

const files = project.getSourceFiles()

function isAbsolute (value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  return layers.some((layer) => value.startsWith(layer))
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '')

    const segment = valueWithoutAlias.split('/')
    const isSharedLayer = segment?.[0] === 'shared'
    const isUiLayer = segment?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiLayer) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/')
      importDeclaration.setModuleSpecifier(`@/${result}`)
    }
  })
})

project.save()
