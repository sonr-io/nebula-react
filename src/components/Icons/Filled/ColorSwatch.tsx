
import ColorSwatch from "../../../assets/filled/ColorSwatch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ColorSwatchIcon({ className, dataTestid = "ColorSwatchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ColorSwatch data-testid={dataTestid} className={classes} {...rest} />
  );
}
