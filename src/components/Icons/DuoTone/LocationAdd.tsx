
import LocationAdd from "../../../assets/duotone/LocationAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LocationAdd} data-testid="LocationAddIcon" className={classes} />
  );
}
