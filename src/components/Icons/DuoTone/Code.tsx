
import Code from "../../../assets/duotone/Code.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CodeIcon({ className, dataTestid = "CodeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Code data-testid={dataTestid} className={classes} {...rest} />
  );
}
