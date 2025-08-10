// src/component/Notification.tsx

import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import React from "react";
import classes from "./Notification.module.css";
import type { NotificationPosition } from "../context/NotifictionProvider";

export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string | number;
  onClose?: () => void;
  position: NotificationPosition;
}

const typeIcon = {
  success: <IoCheckmarkCircleOutline className={classes["noti-icon"]} />,
  info: <IoInformationCircleOutline className={classes["noti-icon"]} />,
  warning: <IoWarningOutline className={classes["noti-icon"]} />,
  error: <IoCloseCircleOutline className={classes["noti-icon"]} />,
};

const Notification = ({ type, message, onClose }: NotificationProps) => {
  return (
    <div className={`${classes["noti-container"]} ${classes[type]}`}>
      {typeIcon[type]}
      <span className={classes["noti-message"]}>{message}</span>
      <IoMdClose
        className={classes["noti-close"]}
        onClick={onClose}
        role="button"
        aria-label="Close notification"
      />
    </div>
  );
};

export default React.memo(Notification);
