
import Sagittarius from "../../../assets/filled/Sagittarius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SagittariusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sagittarius data-testid="SagittariusIcon" className={classes} />
  );
}
