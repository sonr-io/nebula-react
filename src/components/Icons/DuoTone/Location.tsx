
import Location from "../../../assets/duotone/Location.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Location} data-testid="LocationIcon" className={classes} />
  );
}
