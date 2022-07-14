
import MessageFavorite from "../../../assets/filled/MessageFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageFavorite data-testid="MessageFavoriteIcon" className={classes} />
  );
}
