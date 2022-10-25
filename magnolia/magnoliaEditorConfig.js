import Raw from "../components/Raw/Raw";
import RawTemplate from "./../components/Raw/RawTemplate";

const config = {
  componentMappings: {
    "archetype-lm:pages/basic": RawTemplate,
    defaultTemplate: Raw,
    default: Raw,
    undefined: Raw,
  },
};

export default config;
