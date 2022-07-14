
import Personalcard from "../../../assets/filled/Personalcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PersonalcardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Personalcard data-testid="PersonalcardIcon" className={classes} />
  );
}
