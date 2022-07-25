
import Strikethrough from "../../../assets/filled/Strikethrough.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StrikethroughIcon({ className, dataTestid = "StrikethroughIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Strikethrough data-testid={dataTestid} className={classes} {...rest} />
  );
}
