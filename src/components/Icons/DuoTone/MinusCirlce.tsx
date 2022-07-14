
import MinusCirlce from "../../../assets/duotone/MinusCirlce.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusCirlceIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MinusCirlce} data-testid="MinusCirlceIcon" className={classes} />
  );
}
