
import MirroringScreen from "../../../assets/filled/MirroringScreen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MirroringScreenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MirroringScreen data-testid="MirroringScreenIcon" className={classes} />
  );
}
