
import SearchZoomOut from "../../../assets/filled/SearchZoomOut.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomOutIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchZoomOut} data-testid="SearchZoomOutIcon" className={classes} />
  );
}
