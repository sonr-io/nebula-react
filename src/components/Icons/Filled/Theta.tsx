
import Theta from "../../../assets/filled/Theta.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ThetaIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Theta} data-testid="ThetaIcon" className={classes} />
  );
}
