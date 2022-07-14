
import CloudPlus from "../../../assets/filled/CloudPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudPlusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudPlus data-testid="CloudPlusIcon" className={classes} />
  );
}
