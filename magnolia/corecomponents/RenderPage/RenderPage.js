// MOST OF THE IFRAME MESSAGING CODE AND THE REGEX IS TAKEN FROM THE MAIN MAGNOLIA REPO
// AT SOME POINT OF TIME THIS NEEDS TO BE LOOKED AT BY MAGNOLIA TO MAKE THINGS ACTUALLY NEATER

import { EditablePage } from "@magnolia/react-editor";
import { useEffect, useState } from "react";
import { getPage, getTemplate } from "./../../index.js";
import magnolidaEditorConfig from "./../../magnoliaEditorConfig.js";
import handleMagnoliaComponentServersideProps from "./../../handleMagnoliaComponentServersideProps";

const RenderPage = (props) => {
  let { pageJSON, env } = props;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(pageJSON);
  const [template, setTemplate] = useState(null);
  const [renderClientSideComponent, setrenderClientSideComponent] = useState(
    !props.inMagnoliaEditor
  );

  useEffect(() => {
    setContent(pageJSON);
  }, [pageJSON]);

  const loadPage = async (path = props.pathname) => {
    const pagePath = window.location.pathname.replace(
      new RegExp(
        "(.*" + process.env.NEXT_PUBLIC_MAGNOLIA_HOST + "|.html)",
        "g"
      ),
      ""
    );
    let [_pageJSON, _templateJSON] = await Promise.all([
      getPage(pagePath, env),
      getTemplate(pagePath, env),
    ]).then((r) => r);

    pageJSON = await handleMagnoliaComponentServersideProps(_pageJSON);

    setContent(_pageJSON);
    setTemplate(_templateJSON);

    setrenderClientSideComponent(true);
  };

  // handle messaging
  useEffect(() => {
    const handler = (event) => {
      try {
        if (typeof event.data !== "string") {
          return;
        }
        const message = JSON.parse(event.data);
        if (message.action === "refresh") {
          loadPage();
        }
      } catch (e) {
        console.error("Failed to parse " + event.data);
      }
    };

    if (props.inMagnoliaEditor) {
      let rootel = document.getElementsByTagName("html")[0];
      rootel.setAttribute("class", "ineditor");
      loadPage();
    }

    window.addEventListener("message", handler);
  }, []);

  return (
    <>
      {!!props.inMagnoliaEditor && (
        <div className=" py-6 block my-6 text-xs text-center leading-none tracking-wider font-bold">
          EDITING PAGE
        </div>
      )}
      {!!renderClientSideComponent ? (
        <EditablePage
          templateAnnotations={template}
          content={content}
          config={magnolidaEditorConfig}
          inMagnoliaEditor={props.inMagnoliaEditor}
        ></EditablePage>
      ) : (
        "fetching page"
      )}
      {!!props.inMagnoliaEditor && (
        <div className=" py-6 block my-6 text-xs text-center leading-none tracking-wider font-bold">
          EDITING PAGE
        </div>
      )}
    </>
  );
};

export default RenderPage;
