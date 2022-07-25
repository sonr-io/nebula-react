
import Blend from "../../../assets/filled/Blend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BlendIcon({ className, dataTestid = "BlendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Blend data-testid={dataTestid} className={classes} {...rest} />
  );
}
