import MagnoliaImage from "../../magnolia/corecomponents/MagnoliaImage";

const Image = (props) => {
  const {
    image,
    isImageGroup = false,
    fullWidth = "false",
    showCaption = "false",
    imageCaption,
  } = props;
  return (
    <figure className={`block fullwidth-${fullWidth}`}>
      {!!image && !!image["@path"] && (
        <MagnoliaImage
          className={`
            ${fullWidth === "true" ? "block w-full" : " block mx-auto"}
        `}
          {...props}
        />
      )}
      {showCaption === "true" && !!imageCaption && (
        <figcaption className="block w-full mt-5 text-center lg:mt-9 ">
          {imageCaption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
