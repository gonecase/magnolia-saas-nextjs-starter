import Head from "next/head";
import { getPage, getPageChildren } from "../magnolia";
import handleMagnoliaComponentServersideProps from "./../magnolia/handleMagnoliaComponentServersideProps";
import RenderPage from "../magnolia/corecomponents/RenderPage/RenderPage";
const branchName = require("current-git-branch");
import { useEffect, useState } from "react";


function Page(pageJSON) {
  const {
    title,
    pathname,
    inMagnoliaEditor,
    environment,
    description
  } = pageJSON;
  const [inBrowser, setInBrowser] = useState(false);
  useEffect(() => {
    setInBrowser(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          {title} | {process.env.NEXT_PUBLIC_SITE_TITLE}
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RenderPage
        env={environment}
        pagePath={pathname}
        inMagnoliaEditor={inMagnoliaEditor}
        pageJSON={pageJSON}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  global.mgnlInPageEditor = !!query.mgnlPreview;

  let pathname = query?.slug?.join("/") || "";
  const path = `${!!query.mgnlPreview
    ? "/"
    : process.env.NEXT_PUBLIC_MAGNOLIA_PAGES_FOLDER_BASE
    }${pathname}`;
  let pageJSON = await getPage(path);

  if (!pageJSON) {
    return {
      notFound: true,
    };
  }

  pageJSON = await handleMagnoliaComponentServersideProps(pageJSON);

  const nav = await getPageChildren(
    process.env.NEXT_PUBLIC_MAGNOLIA_PAGES_FOLDER_BASE
  );

  let currentEnv = "main";
  const currentGitBranch = branchName();

  if (!!currentGitBranch && currentGitBranch.indexOf("env/") === 0) {
    currentEnv = currentGitBranch.replace("env/", "");
  }

  return {
    props: {
      pathname,
      environment: currentEnv,
      inMagnoliaEditor: !!query.mgnlPreview,
      ...pageJSON,
      nav
    },
  };
}

export default Page;
