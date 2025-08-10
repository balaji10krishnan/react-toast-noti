import { createContext, useContext, useState, type ReactNode } from "react";
import type { NotificationProps } from "../component/Notification";
import Notification from "../component/Notification";

interface NotificationProvider {
  children: ReactNode;
}
export type NotificationPostion =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
interface NotificationTrigger extends NotificationProps {
  position: NotificationPostion;
  autoClose: number;
}
const NotificationContext = createContext<{
  triggerNotification: (val: NotificationTrigger) => void;
} | null>(null);

const NotificationProvider = ({ children }: NotificationProvider) => {
  const [notification, setNotification] = useState<NotificationProps | null>();
  //   const useNotification = (position: NotificationPostion) => {
  //     const triggerNotification = (notificationProps: NotificationProps) => {
  //       setNotification(notificationProps);
  //     };
  //     return { triggerNotification };
  //   };
  const triggerNotification = (notificationTrigger: NotificationTrigger) => {
    setNotification(notificationTrigger);
    setTimeout(() => {
      setNotification(null);
    }, notificationTrigger.autoClose);
  };
  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {notification ? <Notification {...notification} /> : ""}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const notificationContext = useContext(NotificationContext);
  if (!notificationContext) {
    throw new Error("Wrap your child in NotificationProvider ");
  }
  return notificationContext;
};

export default NotificationProvider;
