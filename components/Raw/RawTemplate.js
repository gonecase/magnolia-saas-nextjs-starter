import { EditableArea } from "@magnolia/react-editor";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback, useContext } from "react";

const RawTemplate = (props) => {
  const { main, sidebar, title } = props;
  const router = useRouter();

  return (
    <>
      <main className="">
        {!!main && <EditableArea className="main-content" content={main} />}
      </main>
    </>
  );
};

export default RawTemplate;
