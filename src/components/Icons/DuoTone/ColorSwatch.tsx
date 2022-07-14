
import ColorSwatch from "../../../assets/duotone/ColorSwatch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ColorSwatchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ColorSwatch data-testid="ColorSwatchIcon" className={classes} />
  );
}
