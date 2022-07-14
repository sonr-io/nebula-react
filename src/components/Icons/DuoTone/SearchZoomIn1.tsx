
import SearchZoomIn1 from "../../../assets/duotone/SearchZoomIn1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomIn1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchZoomIn1} data-testid="SearchZoomIn1Icon" className={classes} />
  );
}
