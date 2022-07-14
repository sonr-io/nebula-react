
import VoiceCricle from "../../../assets/duotone/VoiceCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VoiceCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VoiceCricle} data-testid="VoiceCricleIcon" className={classes} />
  );
}
