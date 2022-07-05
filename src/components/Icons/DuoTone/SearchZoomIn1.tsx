
import SearchZoomIn1 from "../../../assets/duotone/SearchZoomIn1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchZoomIn1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchZoomIn1 data-testid="SearchZoomIn1Icon" className={classes} />
  );
}
