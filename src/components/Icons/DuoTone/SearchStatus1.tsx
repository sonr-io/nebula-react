
import SearchStatus1 from "../../../assets/duotone/SearchStatus1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchStatus1Icon({ className, dataTestid = "SearchStatus1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchStatus1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
