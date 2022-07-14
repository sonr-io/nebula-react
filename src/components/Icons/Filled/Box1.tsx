
import Box1 from "../../../assets/filled/Box1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Box1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Box1} data-testid="Box1Icon" className={classes} />
  );
}
