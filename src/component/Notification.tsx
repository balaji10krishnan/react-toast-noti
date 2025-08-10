// src/component/Notification.tsx

import React from "react";
import classes from "./Notification.module.css";
import type { NotificationPosition } from "../context/NotifictionProvider";
import {
  ICCheckCircle,
  ICClose,
  ICCloseCircle,
  ICInfoCircle,
  ICWarningCircle,
} from "../assets/icons";

export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string | number;
  onClose?: () => void;
  position: NotificationPosition;
}

const typeIcon = {
  // success: <IoCheckmarkCircleOutline className={classes["noti-icon"]} />,
  success: <ICCheckCircle className={classes["noti-icon"]} />,
  info: <ICInfoCircle className={classes["noti-icon"]} />,
  warning: <ICWarningCircle className={classes["noti-icon"]} />,
  error: <ICCloseCircle className={classes["noti-icon"]} />,
};

const Notification = ({ type, message, onClose }: NotificationProps) => {
  return (
    <div className={`${classes["noti-container"]} ${classes[type]}`}>
      {typeIcon[type]}
      <span className={classes["noti-message"]}>{message}</span>
      <ICClose className={classes["noti-close"]} onClick={onClose} />
    </div>
  );
};

export default React.memo(Notification);
