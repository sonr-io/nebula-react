
import SearchFavorite from "../../../assets/outline/SearchFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchFavorite} data-testid="SearchFavoriteIcon" className={classes} />
  );
}
