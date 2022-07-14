
import Android from "../../../assets/outline/Android.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AndroidIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Android} data-testid="AndroidIcon" className={classes} />
  );
}
