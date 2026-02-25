import yaml from 'yaml'

export const parseFile = (content, filename = '') => {
  const extension = filename.split('.').pop().toLowerCase()

  switch (extension) {
    case 'json':
      return JSON.parse(content)
    case 'yaml':
    case 'yml':
      return yaml.parse(content)
    default:
      throw new Error(`Unsupported file format: .${extension}`)
  }
}
