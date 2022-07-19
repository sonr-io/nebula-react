
import Illustrator from "../../../assets/duotone/Illustrator.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IllustratorIcon({ className, dataTestid = "IllustratorIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Illustrator data-testid={dataTestid} className={classes} {...rest} />
  );
}
