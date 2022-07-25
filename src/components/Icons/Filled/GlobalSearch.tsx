
import GlobalSearch from "../../../assets/filled/GlobalSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalSearchIcon({ className, dataTestid = "GlobalSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GlobalSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
