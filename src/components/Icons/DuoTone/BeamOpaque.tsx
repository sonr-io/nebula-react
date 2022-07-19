
import BeamOpaque from "../../../assets/duotone/BeamOpaque.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeamOpaqueIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BeamOpaque data-testid="BeamOpaqueIcon" className={classes} />
  );
}
