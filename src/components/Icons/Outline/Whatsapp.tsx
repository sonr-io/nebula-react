
import Whatsapp from "../../../assets/outline/Whatsapp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WhatsappIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Whatsapp} data-testid="WhatsappIcon" className={classes} />
  );
}
