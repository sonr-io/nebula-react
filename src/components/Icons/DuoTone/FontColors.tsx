
import FontColors from "../../../assets/duotone/FontColors.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FontColorsIcon({ className, dataTestid = "FontColorsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FontColors data-testid={dataTestid} className={classes} {...rest} />
  );
}
