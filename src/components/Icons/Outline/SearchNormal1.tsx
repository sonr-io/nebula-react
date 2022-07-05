
import SearchNormal1 from "../../../assets/outline/SearchNormal1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchNormal1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchNormal1 data-testid="SearchNormal1Icon" className={classes} />
  );
}
