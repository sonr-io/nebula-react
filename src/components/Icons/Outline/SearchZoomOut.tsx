
import SearchZoomOut from "../../../assets/outline/SearchZoomOut.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomOutIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchZoomOut data-testid="SearchZoomOutIcon" className={classes} />
  );
}