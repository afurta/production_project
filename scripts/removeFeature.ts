import { Node, Project, SyntaxKind } from 'ts-morph'

const project = new Project({})

const removedFeatureName = process.argv[2]
const featureState = process.argv[3]

if (!removedFeatureName) throw new Error('Не указан removedFeatureName')
if (!featureState) throw new Error('Не указан featureState')

if (featureState !== 'on' && featureState !== 'off')
  throw new Error('Некорректное значение featureState')

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const isToggleFeature = (node: Node) => {
  let isToggleFeature = false
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeature'
    ) {
      isToggleFeature = true
    }
  })
  return isToggleFeature
}

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFeature(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
      )

      if (!objectOptions) return
      const onFunctionOptionProperty = objectOptions.getProperty('on')
      const offFunctionOptionProperty = objectOptions.getProperty('off')
      const featureNameProperty = objectOptions.getProperty('name')

      const onFunction = onFunctionOptionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      )
      const offFunction = offFunctionOptionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      )
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)

      if (featureName !== removedFeatureName) return

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
      }
    }
  })
})

project.save()
