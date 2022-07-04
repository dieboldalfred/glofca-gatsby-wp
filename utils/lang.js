const DEFAULT_LANGUAGE = "en"

exports.getTranslatedCategorySlug = (categorySlug, language) => {
  if (language === DEFAULT_LANGUAGE || !language) {
    return categorySlug
  }

  return `${categorySlug}-${language}`
}

// module.exports = { getTranslatedCa: () => {}}
