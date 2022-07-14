
import ForwardItem from "../../../assets/filled/ForwardItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardItemIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ForwardItem data-testid="ForwardItemIcon" className={classes} />
  );
}