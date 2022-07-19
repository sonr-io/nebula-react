
import Pharagraphspacing from "../../../assets/duotone/Pharagraphspacing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PharagraphspacingIcon({ className, dataTestid = "PharagraphspacingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Pharagraphspacing data-testid={dataTestid} className={classes} {...rest} />
  );
}
