import MagnoliaImage from "../../magnolia/corecomponents/MagnoliaImage";

const Image = (props) => {
  const {
    image,
    isImageGroup = false,
    fullWidth = "false",
    showCaption = "false",
    imageCaption,
  } = props;
  // return <section className={`
  //     ${isImageGroup ? '' : 'mb-24 lg:mb-36'}
  //     ${fullWidth === 'true' && orientation === 'left' ? 'lg:pr-20' : ''}
  //     ${fullWidth === 'true' && orientation === 'right' ? 'lg:pl-20 lg:flex lg:flex-row-reverse' : ''}
  //     ${fullWidth !== 'true' ? 'container mx-auto' : ''}
  // `}>
  //     <figure className="block">
  //         {!!props.image && !!props.image['@path'] ? <MagnoliaImage {...props} /> : <img src="https://place-hold.it/1600x600/f0f0f0?text=NoImageLoaded" className={`

  //         `} />}
  //     </figure>
  // </section>
  return (
    <figure className={`block magnolia_image fullwidth-${fullWidth}`}>
      {!!props.image && !!props.image["@path"] ? (
        <MagnoliaImage
          className={`
            ${fullWidth === "true" ? "block w-full" : " block mx-auto"}
        `}
          alt="Computer and phone mockup showcasing customer website."
          {...props}
        />
      ) : (
        <img
          src="https://place-hold.it/1600x600/f0f0f0?text=NoImageLoaded"
          alt="Computer and phone mockup showcasing customer website."
          className={`
            ${
              fullWidth === "true"
                ? "block w-full h-0 overflow-hidden opacity-0"
                : "block w-full h-0 overflow-hidden opacity-0"
            }
        `}
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
