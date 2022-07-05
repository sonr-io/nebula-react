
import SearchFavorite from "../../../assets/duotone/SearchFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SearchFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchFavorite data-testid="SearchFavoriteIcon" className={classes} />
  );
}
