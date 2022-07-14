
import Dent from "../../../assets/duotone/Dent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Dent} data-testid="DentIcon" className={classes} />
  );
}
