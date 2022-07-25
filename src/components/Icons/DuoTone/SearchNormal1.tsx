
import SearchNormal1 from "../../../assets/duotone/SearchNormal1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchNormal1Icon({ className, dataTestid = "SearchNormal1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchNormal1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
