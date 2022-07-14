
import CloudPlus from "../../../assets/duotone/CloudPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudPlusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudPlus} data-testid="CloudPlusIcon" className={classes} />
  );
}
