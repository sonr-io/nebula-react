
import Forbidden from "../../../assets/filled/Forbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForbiddenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forbidden data-testid="ForbiddenIcon" className={classes} />
  );
}
