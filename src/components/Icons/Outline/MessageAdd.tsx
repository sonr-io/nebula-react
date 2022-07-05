
import MessageAdd from "../../../assets/outline/MessageAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageAdd data-testid="MessageAddIcon" className={classes} />
  );
}
