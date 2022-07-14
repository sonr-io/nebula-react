
import Danger from "../../../assets/filled/Danger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DangerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Danger} data-testid="DangerIcon" className={classes} />
  );
}
