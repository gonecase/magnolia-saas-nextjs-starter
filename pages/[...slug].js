import Head from "next/head";
import { getPage, getPageChildren } from "../magnolia";
import handleMagnoliaComponentServersideProps from "./../magnolia/handleMagnoliaComponentServersideProps";
import RenderPage from "../magnolia/corecomponents/RenderPage/RenderPage";
const branchName = require("current-git-branch");
import { Menu } from "./../components/organisms/Menu";
import { useEffect, useState } from "react";

const clients = [
  {
    name: "sunwing",
    category: "other",
  },
  {
    name: "pizza_nova",
    category: "cpg_food_service",
  },
  {
    name: "pepsi",
    category: "cpg_food_service",
  },
  {
    name: "financial_horizons",
    category: "financial_services",
    link: "case-study-finanical-horizons",
  },
  {
    name: "bc_hockey",
    category: "sports",
    link: "case-study-bc-hockey-website",
  },
  {
    name: "memo_swob",
    category: "technology",
  },
  {
    name: "oxford",
    category: "commercial_real_estate",
  },
  {
    name: "brookfield_prperties",
    category: "commercial_real_estate",
  },
  {
    name: "wysdom_ai",
    category: "technology",
  },
  {
    name: "first_capital",
    category: "commercial_real_estate",
  },
  {
    name: "schweppes",
    category: "cpg_food_service",
  },
  {
    name: "moneris_solution",
    category: "financial_services",
  },
  {
    name: "arvada_center",
    category: "arts_culture",
    link: "case-study-arvada-center",
  },
  {
    name: "yokohama",
    category: "other",
  },
  {
    name: "intuit",
    category: "financial_services",
    link: "case-study-intuit-website",
  },
  {
    name: "first_canadian",
    category: "commercial_real_estate",
    link: "case-study-first-canadian-place",
  },
  {
    name: "meppi",
    category: "hardware_electronics",
    link: "case-study-mitsubishi-electric",
  },
  {
    name: "hockey_ns",
    category: "sports",
  },
  {
    name: "mad_monkey",
    category: "commercial_real_estate",
  },
  {
    name: "kcu",
    category: "education",
  },
  {
    name: "dr_pepper",
    category: "cpg_food_service",
  },
  {
    name: "cbc",
    category: "financial_services",
  },
  {
    name: "hydrogenics",
    category: "hardware_electronics",
  },
  {
    name: "hockey_can",
    category: "sports",
  },
  {
    name: "yiss",
    category: "education",
  },
  {
    name: "globe",
    category: "publishing",
  },
  {
    name: "commerce_court",
    category: "commercial_real_estate",
  },
  {
    name: "motts",
    category: "cpg_food_service",
  },
  {
    name: "haglofs",
    category: "fashion_retail",
  },
  {
    name: "reliance",
    category: "hardware_electronics",
    link: "case-study-reliance-home-comfort",
  },
  {
    name: "t_mobile",
    category: "telecom",
  },
  {
    name: "cirque_du_soleil",
    category: "arts_culture",
  },
  {
    name: "peplink",
    category: "hardware_electronics",
  },
  {
    name: "wc",
    category: "sports",
  },
  {
    name: "sathapana_bank",
    category: "financial_services",
  },
  {
    name: "aus_boot",
    category: "fashion_retail",
  },
];

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Financial Services",
    value: "financial_services",
  },
  {
    label: "Technology",
    value: "technology",
  },
  {
    label: "Commercial Real Estate",
    value: "commercial_real_estate",
  },
  {
    label: "Hardware & Electronics",
    value: "hardware_electronics",
  },
  {
    label: "CPG Food Service",
    value: "cpg_food_service",
  },
  {
    label: "Telecom",
    value: "telecom",
  },
  {
    label: "Fashion & Retail",
    value: "fashion_retail",
  },
  {
    label: "Publishing",
    value: "publishing",
  },
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Arts & Culture",
    value: "arts_culture",
  },
  {
    label: "Other",
    value: "other",
  },
];

const insights = [];

function Page(pageJSON) {
  const {
    title,
    pathname,
    inMagnoliaEditor,
    environment,
    nav,
    description = "UX/UI Design . Websites . Apps . eCommerce . Web3",
    lang = "en",
    site = "https://dotfusion.com/",
  } = pageJSON;
  const [inBrowser, setInBrowser] = useState(false);
  useEffect(() => {
    setInBrowser(true);
  }, []);

  return (
    <>
      <Head>
        <html lang={lang} />
        <title>
          {title} | {process.env.NEXT_PUBLIC_SITE_TITLE}
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={site + pathname} />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </Head>
      {!!nav && !inMagnoliaEditor && <Menu nav={nav} currentPath={pathname} />}
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
  const path = `${
    !!query.mgnlPreview
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
      nav,
      clients,
      categories,
      insights,
    },
  };
}

export default Page;
