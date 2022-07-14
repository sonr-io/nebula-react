
import MirroringScreen from "../../../assets/duotone/MirroringScreen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MirroringScreenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MirroringScreen data-testid="MirroringScreenIcon" className={classes} />
  );
}
