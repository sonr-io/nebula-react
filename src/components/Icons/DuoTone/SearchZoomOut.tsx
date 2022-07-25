
import SearchZoomOut from "../../../assets/duotone/SearchZoomOut.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomOutIcon({ className, dataTestid = "SearchZoomOutIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchZoomOut data-testid={dataTestid} className={classes} {...rest} />
  );
}
