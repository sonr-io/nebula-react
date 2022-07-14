
import CloudRemove from "../../../assets/filled/CloudRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudRemove} data-testid="CloudRemoveIcon" className={classes} />
  );
}
