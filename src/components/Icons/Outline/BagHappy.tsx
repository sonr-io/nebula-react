
import BagHappy from "../../../assets/outline/BagHappy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagHappyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BagHappy} data-testid="BagHappyIcon" className={classes} />
  );
}
