import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph'

const project = new Project({})

const removedFeatureName = process.argv[2]
const featureState = process.argv[3]

const toggleFeatureName = 'toggleFeature'
const toggleComponentName = 'ToggleFeature'

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
      child.getText() === toggleFeatureName
    ) {
      isToggleFeature = true
    }
  })
  return isToggleFeature
}

const isToggleComponent = (node: Node) => {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

  return identifier?.getText() === toggleComponentName
}

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string
) => {
  return jsxAttributes.find((node) => node.getName() === name)
}

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText()

  if (value?.startsWith('(')) {
    return value.slice(1, -1)
  }

  return value
}

const replaceToggleFunction = (node: Node) => {
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

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

  const onAttribute = getAttributeNodeByName(attributes, 'on')
  const offAttribute = getAttributeNodeByName(attributes, 'off')

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature')

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1)

  if (featureName !== removedFeatureName) return

  const onValue = getReplacedComponent(onAttribute)
  const offValue = getReplacedComponent(offAttribute)

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue)
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue)
  }
}

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFeature(node)) {
      replaceToggleFunction(node)
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceToggleComponent(node)
    }
  })
})

project.save()
