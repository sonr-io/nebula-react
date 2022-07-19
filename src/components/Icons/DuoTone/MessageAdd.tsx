
import MessageAdd from "../../../assets/duotone/MessageAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageAddIcon({ className, dataTestid = "MessageAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
