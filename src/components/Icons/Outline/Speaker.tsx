
import Speaker from "../../../assets/outline/Speaker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpeakerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Speaker data-testid="SpeakerIcon" className={classes} />
  );
}
