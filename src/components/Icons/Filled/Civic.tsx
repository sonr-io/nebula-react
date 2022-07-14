
import Civic from "../../../assets/filled/Civic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CivicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Civic data-testid="CivicIcon" className={classes} />
  );
}
