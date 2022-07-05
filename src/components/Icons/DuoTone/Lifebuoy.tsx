
import Lifebuoy from "../../../assets/duotone/Lifebuoy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LifebuoyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lifebuoy data-testid="LifebuoyIcon" className={classes} />
  );
}
