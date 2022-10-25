import { EditableArea } from "@magnolia/react-editor";
import { useRouter } from "next/router";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState, useCallback, useContext } from "react";
import FullCanvas from "../organisms/HomepageShowoff/FullCanvas";
import CursorContext from "../CursorContext";

const variants = {
  // visible: { y: `0px`, clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`, transition: { duration: 0.6, delay: 0 } },
  // hidden: { clipPath: `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`, y: `0px`, }
  visible: {
    opacity: 0.9,
    clipPath: `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
    transition: { duration: 0.6, delay: 0.1 },
  },
  hidden: {
    opacity: 1,
    clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
  },
};

const RawTemplate = (props) => {
  const { main, sidebar, title } = props;
  const router = useRouter();
  const controls = useAnimation();
  const { setCursorScale } = useContext(CursorContext);

  let anchors = [];

  let setAnchorCursors = () => {
    setCursorScale("0.4");
  };

  let unsetAnchorCursors = () => {
    setCursorScale("1");
  };

  const onRouteChangeDone = useCallback(() => {
    setTimeout(() => {
      // anchors = document.getElementsByTagName("a");
      // for (let anchor of anchors) {
      //   anchor.addEventListener("mouseenter", setAnchorCursors);
      //   anchor.addEventListener("mouseleave", unsetAnchorCursors);
      // }
      controls.start("visible");
    }, 100);
  }, []);

  const onRouteChangeStart = useCallback(() => {
    controls.start("hidden");
    console.log("route changing");
    // for (let anchor of anchors) {
    //   anchor.removeEventListener("mouseenter", setAnchorCursors);
    //   anchor.removeEventListener("mouseleave", unsetAnchorCursors);
    // }
  });

  const onRouteChangeError = useCallback(() => {});

  useEffect(() => {
    controls.start("visible");
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeDone);
    router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeDone);
      router.events.off("routeChangeError", onRouteChangeError);
    };
  }, [onRouteChangeDone, onRouteChangeStart, router.events]);
  return (
    <>
      {/* <motion.main
        onMouseMove={(e) => {}}
        variants={variants}
        animate={controls}
        initial="hidden"
        className="relative z-0 min-h-screen lg:ml-24"
      >
        {!!main && <EditableArea className="main-content" content={main} />}
        {!!sidebar && (
          <EditableArea className="main-sidebar" content={sidebar} />
        )}
      </motion.main> */}
      <main onMouseMove={(e) => {}} className="relative min-h-screen lg:ml-24">
        {!!main && <EditableArea className="main-content" content={main} />}
        {!!sidebar && (
          <EditableArea className="main-sidebar" content={sidebar} />
        )}
      </main>
      <motion.div
        variants={variants}
        animate={controls}
        initial="hidden"
        className="fixed top-0 h-screen w-screen bg-white z-50"
      />
      <FullCanvas pathname={router.pathname} />
    </>
  );
};

export default RawTemplate;
