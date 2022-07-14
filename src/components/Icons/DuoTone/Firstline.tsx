
import Firstline from "../../../assets/duotone/Firstline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FirstlineIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Firstline} data-testid="FirstlineIcon" className={classes} />
  );
}
