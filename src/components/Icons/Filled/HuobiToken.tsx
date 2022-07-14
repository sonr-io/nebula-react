
import HuobiToken from "../../../assets/filled/HuobiToken.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HuobiTokenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HuobiToken data-testid="HuobiTokenIcon" className={classes} />
  );
}
