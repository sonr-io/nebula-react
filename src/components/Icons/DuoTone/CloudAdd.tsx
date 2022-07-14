
import CloudAdd from "../../../assets/duotone/CloudAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudAdd} data-testid="CloudAddIcon" className={classes} />
  );
}
