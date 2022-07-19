
import Italic from "../../../assets/filled/Italic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ItalicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Italic data-testid="ItalicIcon" className={classes} />
  );
}
