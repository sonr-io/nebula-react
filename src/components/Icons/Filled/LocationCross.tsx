
import LocationCross from "../../../assets/filled/LocationCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LocationCross} data-testid="LocationCrossIcon" className={classes} />
  );
}
