
import Lifebuoy from "../../../assets/filled/Lifebuoy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LifebuoyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Lifebuoy} data-testid="LifebuoyIcon" className={classes} />
  );
}
