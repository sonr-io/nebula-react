
import Record from "../../../assets/outline/Record.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecordIcon({ className, dataTestid = "RecordIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Record data-testid={dataTestid} className={classes} {...rest} />
  );
}
