
import FontSize from "../../../assets/outline/FontSize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FontSizeIcon({ className, dataTestid = "FontSizeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FontSize data-testid={dataTestid} className={classes} {...rest} />
  );
}
