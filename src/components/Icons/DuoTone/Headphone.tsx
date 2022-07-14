
import Headphone from "../../../assets/duotone/Headphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeadphoneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Headphone} data-testid="HeadphoneIcon" className={classes} />
  );
}
