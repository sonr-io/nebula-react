
import NotificationFavorite from "../../../assets/duotone/NotificationFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NotificationFavorite data-testid="NotificationFavoriteIcon" className={classes} />
  );
}
