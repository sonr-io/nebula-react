
import Civic from "../../../assets/outline/Civic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CivicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Civic} data-testid="CivicIcon" className={classes} />
  );
}
