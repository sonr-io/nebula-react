
import SearchStatus1 from "../../../assets/outline/SearchStatus1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchStatus1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchStatus1 data-testid="SearchStatus1Icon" className={classes} />
  );
}
