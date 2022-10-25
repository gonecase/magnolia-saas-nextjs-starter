const getTemplate = async (templateId, env='main') => {
    const MAGNOLIA_REST_PAGETEMPLATES = `${process.env.NEXT_PUBLIC_MAGNOLIA_HOST}${process.env.NEXT_PUBLIC_MAGNOLIA_REST_BASE}/environments/${env}/template-annotations/v1`
    if (!templateId) {
        console.log("templateId not provided")
    }
    const path = MAGNOLIA_REST_PAGETEMPLATES + templateId;

    const templateJSON = await fetch(path)
        .then(response => {
            if (!response.ok) { throw response }
            return response.json()
        })
        .catch(err => {
            console.log(path);
            return false;
        })
    return templateJSON;
    return {};
}

export { getTemplate }

export default getTemplate