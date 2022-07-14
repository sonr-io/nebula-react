
import SearchStatus from "../../../assets/outline/SearchStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchStatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchStatus data-testid="SearchStatusIcon" className={classes} />
  );
}
