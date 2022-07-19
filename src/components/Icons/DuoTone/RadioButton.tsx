
import RadioButton from "../../../assets/duotone/RadioButton.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RadioButtonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RadioButton data-testid="RadioButtonIcon" className={classes} />
  );
}
