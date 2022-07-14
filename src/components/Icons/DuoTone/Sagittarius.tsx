
import Sagittarius from "../../../assets/duotone/Sagittarius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SagittariusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sagittarius data-testid="SagittariusIcon" className={classes} />
  );
}
