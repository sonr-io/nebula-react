
import Simcard from "../../../assets/filled/Simcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SimcardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Simcard} data-testid="SimcardIcon" className={classes} />
  );
}
