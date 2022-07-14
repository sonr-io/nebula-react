
import Information from "../../../assets/filled/Information.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InformationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Information} data-testid="InformationIcon" className={classes} />
  );
}
