
import ForwardSquare from "../../../assets/filled/ForwardSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ForwardSquare} data-testid="ForwardSquareIcon" className={classes} />
  );
}
