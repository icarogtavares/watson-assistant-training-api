const setKeysPrefix = (prefix, object) =>
  Object.keys(object).reduce((result, key) => {
    if (key !== 'element_') {
      result[prefix + key] = object[key]
    }
    return result
  }, {})

module.exports = {
  setKeysPrefix,
}
