
import Send1 from "../../../assets/filled/Send1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Send1Icon({ className, dataTestid = "Send1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Send1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
