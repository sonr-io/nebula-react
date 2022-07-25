
import SearchZoomOut1 from "../../../assets/duotone/SearchZoomOut1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomOut1Icon({ className, dataTestid = "SearchZoomOut1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchZoomOut1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
