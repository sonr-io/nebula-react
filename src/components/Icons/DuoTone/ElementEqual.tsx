
import ElementEqual from "../../../assets/duotone/ElementEqual.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElementEqualIcon({ className, dataTestid = "ElementEqualIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ElementEqual data-testid={dataTestid} className={classes} {...rest} />
  );
}
