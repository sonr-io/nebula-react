
import NotificationFavorite from "../../../assets/filled/NotificationFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationFavoriteIcon({ className, dataTestid = "NotificationFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NotificationFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
