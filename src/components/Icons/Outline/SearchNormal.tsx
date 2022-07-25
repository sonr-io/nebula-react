
import SearchNormal from "../../../assets/outline/SearchNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchNormalIcon({ className, dataTestid = "SearchNormalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchNormal data-testid={dataTestid} className={classes} {...rest} />
  );
}
