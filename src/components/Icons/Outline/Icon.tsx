
import Icon from "../../../assets/outline/Icon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IconIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Icon} data-testid="IconIcon" className={classes} />
  );
}
