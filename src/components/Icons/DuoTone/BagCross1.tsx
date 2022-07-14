
import BagCross1 from "../../../assets/duotone/BagCross1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagCross1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagCross1 data-testid="BagCross1Icon" className={classes} />
  );
}