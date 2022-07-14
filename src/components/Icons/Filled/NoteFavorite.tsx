
import NoteFavorite from "../../../assets/filled/NoteFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NoteFavorite} data-testid="NoteFavoriteIcon" className={classes} />
  );
}
