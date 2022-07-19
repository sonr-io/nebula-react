
import SearchZoomIn from "../../../assets/filled/SearchZoomIn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomInIcon({ className, dataTestid = "SearchZoomInIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchZoomIn data-testid={dataTestid} className={classes} {...rest} />
  );
}
