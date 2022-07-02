const DEFAULT_LANGUAGE = "en"

export const getTranslatedURL = (path, language) => {
  if (language === DEFAULT_LANGUAGE || !language) {
    return path // /${link}/${slug}
  }

  return "/" + language + path
  // /ru/${link}/${slug}
}
