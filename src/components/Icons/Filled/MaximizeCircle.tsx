
import MaximizeCircle from "../../../assets/filled/MaximizeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaximizeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MaximizeCircle} data-testid="MaximizeCircleIcon" className={classes} />
  );
}
