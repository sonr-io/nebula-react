
import ForwardSquare from "../../../assets/duotone/ForwardSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ForwardSquare data-testid="ForwardSquareIcon" className={classes} />
  );
}
