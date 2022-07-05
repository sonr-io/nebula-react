
import SearchZoomIn from "../../../assets/duotone/SearchZoomIn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchZoomInIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchZoomIn data-testid="SearchZoomInIcon" className={classes} />
  );
}
