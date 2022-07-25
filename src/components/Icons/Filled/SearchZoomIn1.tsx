
import SearchZoomIn1 from "../../../assets/filled/SearchZoomIn1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomIn1Icon({ className, dataTestid = "SearchZoomIn1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchZoomIn1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
