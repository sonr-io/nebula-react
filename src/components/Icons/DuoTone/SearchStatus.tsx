
import SearchStatus from "../../../assets/duotone/SearchStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchStatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchStatus data-testid="SearchStatusIcon" className={classes} />
  );
}
