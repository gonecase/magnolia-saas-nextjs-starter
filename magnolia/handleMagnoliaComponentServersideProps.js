import magnoliaEditorConfig from './magnoliaEditorConfig';


const getServerSidePropsForTree = async (branch, tree) => {
  const { componentMappings } = magnoliaEditorConfig;
  let _branch;

  try {
    // get any serversideprops if this is a component that has a mapping
    if (
      !!branch &&
      branch.hasOwnProperty('mgnl:template') && 
      componentMappings[branch['mgnl:template']] &&
      componentMappings[branch['mgnl:template']].hasOwnProperty('getServersideProps')
    ) {
      _branch = await componentMappings[branch['mgnl:template']].getServersideProps({
        currentNode: branch,
        pageNode: tree
      });
    } else {
    }

    if (
      !!branch &&
      branch.hasOwnProperty('@nodes') &&
      branch['@nodes'].length > 0
    ) {
      
      for await (const nodeName of branch['@nodes']) {
        branch[nodeName] = await getServerSidePropsForTree(branch[nodeName], tree);
      }
    }
  } catch (error) {
    console.log(error);
  }

  return {
    ...branch,
    ..._branch
  };
}

const handleMagnoliaComponentServersideProps = async (pageJSON) => {
  let _pageJSON = await getServerSidePropsForTree(pageJSON, pageJSON);
  return _pageJSON;
}

export default handleMagnoliaComponentServersideProps;