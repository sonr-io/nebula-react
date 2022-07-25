
import Layer from "../../../assets/duotone/Layer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LayerIcon({ className, dataTestid = "LayerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Layer data-testid={dataTestid} className={classes} {...rest} />
  );
}
