
import CloudCross from "../../../assets/filled/CloudCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudCross} data-testid="CloudCrossIcon" className={classes} />
  );
}
