
import BeamOpaque from "../../../assets/filled/BeamOpaque.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeamOpaqueIcon({ className, dataTestid = "BeamOpaqueIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BeamOpaque data-testid={dataTestid} className={classes} {...rest} />
  );
}
