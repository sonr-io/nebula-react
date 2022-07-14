
import Flag from "../../../assets/filled/Flag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Flag} data-testid="FlagIcon" className={classes} />
  );
}
