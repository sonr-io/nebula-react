
import Velas from "../../../assets/filled/Velas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VelasIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Velas data-testid="VelasIcon" className={classes} />
  );
}
