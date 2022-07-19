
import Be from "../../../assets/filled/Be.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeIcon({ className, dataTestid = "BeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Be data-testid={dataTestid} className={classes} {...rest} />
  );
}
