const getPageChildren = async (path, env='main') => {
  const MAGNOLIA_REST_PAGES_FLAT = `${process.env.NEXT_PUBLIC_MAGNOLIA_HOST}${process.env.NEXT_PUBLIC_MAGNOLIA_REST_BASE}/environments/${env}/delivery/pagenav/v1`;
  const fullPath = MAGNOLIA_REST_PAGES_FLAT + path;

  const pageJSON = await fetch(fullPath)
      .then(response => {
          if (!response.ok) { throw response }
          return response.json()  //we only get here if there is no error
      })
      .catch(err => {
          console.log(err);
          return false;
      })
  return pageJSON;
}

export { getPageChildren }

export default getPageChildren