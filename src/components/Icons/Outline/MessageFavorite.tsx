
import MessageFavorite from "../../../assets/outline/MessageFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageFavoriteIcon({ className, dataTestid = "MessageFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
