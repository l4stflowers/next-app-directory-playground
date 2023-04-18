const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file))
  )
  return files.filter((_, i) => !isIgnored[i])
}

const buildESLintCommand = async (files) => {
  const targetFiles = await removeIgnoredFiles(files)
  return `eslint --fix --max-warnings 0 ${targetFiles.join(' ')}`
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildESLintCommand, 'prettier --write'],
  '*.{css,scss,html,json,md,yaml}': ['prettier --write'],
}
