
import Mask2 from "../../../assets/outline/Mask2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Mask2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mask2 data-testid="Mask2Icon" className={classes} />
  );
}
