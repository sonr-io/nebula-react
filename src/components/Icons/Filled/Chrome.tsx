
import Chrome from "../../../assets/filled/Chrome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChromeIcon({ className, dataTestid = "ChromeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chrome data-testid={dataTestid} className={classes} {...rest} />
  );
}
