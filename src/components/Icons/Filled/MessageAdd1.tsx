
import MessageAdd1 from "../../../assets/filled/MessageAdd1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageAdd1Icon({ className, dataTestid = "MessageAdd1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageAdd1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
