
import SearchFavorite from "../../../assets/filled/SearchFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SearchFavorite data-testid="SearchFavoriteIcon" className={classes} />
  );
}
