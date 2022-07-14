
import RulerOpen from "../../../assets/duotone/RulerOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RulerOpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RulerOpen data-testid="RulerOpenIcon" className={classes} />
  );
}
