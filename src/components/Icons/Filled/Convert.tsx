
import Convert from "../../../assets/filled/Convert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertIcon({ className, dataTestid = "ConvertIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Convert data-testid={dataTestid} className={classes} {...rest} />
  );
}
