
import DirectNormal from "../../../assets/outline/DirectNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectNormal} data-testid="DirectNormalIcon" className={classes} />
  );
}
