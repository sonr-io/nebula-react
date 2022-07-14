
import SearchZoomOut1 from "../../../assets/filled/SearchZoomOut1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchZoomOut1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchZoomOut1 data-testid="SearchZoomOut1Icon" className={classes} />
  );
}
