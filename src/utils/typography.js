import * as sanitizeHtmlLibrary from "sanitize-html"

export const cutString = (title, maxLength) => {
  if (title?.length > maxLength) {
    return title.slice(0, maxLength) + "..."
  }
  return title
}

export const sanitizeHtml = text =>
  sanitizeHtmlLibrary(text, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
  })

export const clearHtml = text =>
  sanitizeHtmlLibrary(text, {
    allowedTags: [],
    allowedAttributes: [],
  })
