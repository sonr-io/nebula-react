
import Dribbble from "../../../assets/filled/Dribbble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DribbbleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Dribbble} data-testid="DribbbleIcon" className={classes} />
  );
}
