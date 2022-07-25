
import Code1 from "../../../assets/filled/Code1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Code1Icon({ className, dataTestid = "Code1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Code1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
