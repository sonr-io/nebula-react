
import LinkAngled from "../../../assets/filled/LinkAngled.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkAngledIcon({ className, dataTestid = "LinkAngledIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LinkAngled data-testid={dataTestid} className={classes} {...rest} />
  );
}
