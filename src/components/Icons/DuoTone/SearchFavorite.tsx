
import SearchFavorite from "../../../assets/duotone/SearchFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchFavoriteIcon({ className, dataTestid = "SearchFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
