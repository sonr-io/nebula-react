
import NoteFavorite from "../../../assets/outline/NoteFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NoteFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteFavorite data-testid="NoteFavoriteIcon" className={classes} />
  );
}
