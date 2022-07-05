
import SearchNormal from "../../../assets/outline/SearchNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchNormal data-testid="SearchNormalIcon" className={classes} />
  );
}
