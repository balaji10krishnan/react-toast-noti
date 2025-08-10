import { IoMdClose } from "react-icons/io";
import classes from "./Notification.module.css";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import type { NotificationPostion } from "../context/NotifictionProvider";
import React from "react";

export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string | number;
  onClose: () => void;
  position: NotificationPostion;
}

const typeIcon = {
  success: <IoCheckmarkCircleOutline className={`${classes["noti-icon"]}`} />,
  info: <IoInformationCircleOutline className={`${classes["noti-icon"]}`} />,
  warning: <IoWarningOutline className={`${classes["noti-icon"]}`} />,
  error: <IoCloseCircleOutline className={`${classes["noti-icon"]}`} />,
};
const Notification = ({
  type,
  message,
  onClose,
  position,
}: NotificationProps) => {
  console.log("hello noticaion");

  return (
    <div
      className={`${classes["noti-container"]} ${classes[type]} ${classes[position]}`}
    >
      {typeIcon[type]}
      <span>{message}</span>
      <IoMdClose className={`${classes["noti-close"]}`} onClick={onClose} />
    </div>
  );
};

export default React.memo(Notification);
