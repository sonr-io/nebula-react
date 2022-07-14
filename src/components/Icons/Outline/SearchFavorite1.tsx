
import SearchFavorite1 from "../../../assets/outline/SearchFavorite1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchFavorite1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchFavorite1} data-testid="SearchFavorite1Icon" className={classes} />
  );
}
