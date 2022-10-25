const getLink = (pageNode) => {
  return !!pageNode['@path'] ? `/` + pageNode['@path'].replace(process.env.NEXT_PUBLIC_MAGNOLIA_PAGES_FOLDER_BASE, '') : false;
}

export { getLink };
export default getLink;