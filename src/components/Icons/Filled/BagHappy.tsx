
import BagHappy from "../../../assets/filled/BagHappy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagHappyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagHappy data-testid="BagHappyIcon" className={classes} />
  );
}
