export const postFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  author,
  publishedAt,
  readingMinutes,
  featured,
  excerpt,
  mainImage,
  body
`;

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const featuredPostQuery = `
  *[_type == "post" && featured == true][0] {
    ${postFields}
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`;

export const postsByCategoryQuery = `
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    ${postFields}
  }
`;
