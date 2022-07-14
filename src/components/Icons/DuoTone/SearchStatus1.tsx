
import SearchStatus1 from "../../../assets/duotone/SearchStatus1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchStatus1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchStatus1} data-testid="SearchStatus1Icon" className={classes} />
  );
}
