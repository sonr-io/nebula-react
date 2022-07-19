
import BeamDefault from "../../../assets/duotone/BeamDefault.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeamDefaultIcon({ className, dataTestid = "BeamDefaultIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BeamDefault data-testid={dataTestid} className={classes} {...rest} />
  );
}
