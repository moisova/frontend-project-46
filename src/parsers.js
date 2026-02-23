import yaml from 'yaml'

export const parseFile = (content, filename = '') => {
  if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
    return yaml.parse(content)
  }
  else {
    return JSON.parse(content)
  }
}
