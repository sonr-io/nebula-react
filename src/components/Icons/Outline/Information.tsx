
import Information from "../../../assets/outline/Information.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function InformationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Information data-testid="InformationIcon" className={classes} />
  );
}
