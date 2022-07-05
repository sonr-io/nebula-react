
import ColorSwatch from "../../../assets/filled/ColorSwatch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ColorSwatchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ColorSwatch data-testid="ColorSwatchIcon" className={classes} />
  );
}
