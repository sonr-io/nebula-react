
import Android from "../../../assets/filled/Android.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AndroidIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Android data-testid="AndroidIcon" className={classes} />
  );
}
