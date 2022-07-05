
import MessageAdd1 from "../../../assets/filled/MessageAdd1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageAdd1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageAdd1 data-testid="MessageAdd1Icon" className={classes} />
  );
}
