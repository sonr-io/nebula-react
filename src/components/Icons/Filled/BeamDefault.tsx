
import BeamDefault from "../../../assets/filled/BeamDefault.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeamDefaultIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BeamDefault data-testid="BeamDefaultIcon" className={classes} />
  );
}