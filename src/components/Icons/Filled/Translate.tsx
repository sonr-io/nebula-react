
import Translate from "../../../assets/filled/Translate.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TranslateIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Translate data-testid="TranslateIcon" className={classes} />
  );
}
