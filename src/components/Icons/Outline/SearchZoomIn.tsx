
import SearchZoomIn from "../../../assets/outline/SearchZoomIn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomInIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchZoomIn} data-testid="SearchZoomInIcon" className={classes} />
  );
}
