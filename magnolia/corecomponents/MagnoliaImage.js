const MagnoliaImage = ({
  image,
  imgSrc,
  className = "",
  format = false,
  auto = "webp",
  width = false,
  height = false,
  optimize = "high",
  style = {},
}) => {
  const fastlyParams = { format, auto, width, height, optimize };
  const queryString = Object.keys(fastlyParams)
    .filter((key) => !!fastlyParams[key])
    .map((key) => {
      return (
        encodeURIComponent(key) + "=" + encodeURIComponent(fastlyParams[key])
      );
    })
    .join("&");
  const s = !!image && !!image["@path"] ? image["@path"] : imgSrc;
  if (!s) {
    return <></>;
  }
  const fastlyImageSrc = `${s
    .replace("s3:", "")
    .replace(
      process.env.NEXT_PUBLIC_MAGNOLIA_DAM_BASE,
      process.env.NEXT_PUBLIC_MAGNOLIA_CDN_BASE
    )}?${queryString}`;
  return <img className={className} style={style} src={fastlyImageSrc} />;
};

export default MagnoliaImage;
