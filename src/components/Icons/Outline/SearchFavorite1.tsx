
import SearchFavorite1 from "../../../assets/outline/SearchFavorite1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchFavorite1Icon({ className, dataTestid = "SearchFavorite1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SearchFavorite1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
