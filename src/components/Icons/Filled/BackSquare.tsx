
import BackSquare from "../../../assets/filled/BackSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BackSquare data-testid="BackSquareIcon" className={classes} />
  );
}
