
import FlashCircle1 from "../../../assets/filled/FlashCircle1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashCircle1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FlashCircle1} data-testid="FlashCircle1Icon" className={classes} />
  );
}
