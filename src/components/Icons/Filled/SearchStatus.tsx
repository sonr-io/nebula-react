
import SearchStatus from "../../../assets/filled/SearchStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchStatusIcon({ className, dataTestid = "SearchStatusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchStatus data-testid={dataTestid} className={classes} {...rest} />
  );
}
