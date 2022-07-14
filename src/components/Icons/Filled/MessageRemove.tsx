
import MessageRemove from "../../../assets/filled/MessageRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageRemove} data-testid="MessageRemoveIcon" className={classes} />
  );
}
