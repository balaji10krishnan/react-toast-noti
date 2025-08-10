// src/context/NotificationProvider.tsx

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { NotificationProps } from "../component/Notification";
import Notification from "../component/Notification";

export type NotificationPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface NotificationTrigger extends NotificationProps {
  position: NotificationPosition;
  autoClose?: number;
}

interface NotificationWithId extends NotificationTrigger {
  id: string;
}

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<{
  triggerNotification: (val: NotificationTrigger) => void;
} | null>(null);

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationWithId[]>([]);
  const timeoutMap = useRef<Map<string, number>>(new Map());
  const triggerNotification = (notificationTrigger: NotificationTrigger) => {
    const id = `${Date.now()}-${Math.random()}`;
    const notificationWithId: NotificationWithId = {
      ...notificationTrigger,
      id,
      onClose: () => {
        const timeout = timeoutMap.current.get(id);
        if (timeout) {
          clearTimeout(timeout);
          timeoutMap.current.delete(id);
        }
        notificationTrigger.onClose?.();
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      },
    };

    if (notificationTrigger.autoClose) {
      let timer = setTimeout(() => {
        console.log("hello timeout");
        notificationWithId.onClose?.();
      }, notificationTrigger.autoClose);
      timeoutMap.current.set(id, timer);
    }

    setNotifications((prev) => [...prev, notificationWithId]);
  };

  const groupedNotifications: Record<
    NotificationPosition,
    NotificationWithId[]
  > = {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
  };

  notifications.forEach((n) => {
    groupedNotifications[n.position].push(n);
  });

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {Object.entries(groupedNotifications).map(([position, notifs]) => (
        <div
          key={position}
          style={{
            position: "fixed",
            zIndex: 9999,
            margin: "1rem",
            ...(position.includes("top") ? { top: 0 } : { bottom: 0 }),
            ...(position.includes("left") ? { left: 0 } : { right: 0 }),
          }}
        >
          {notifs.map((n) => (
            <Notification key={n.id} {...n} />
          ))}
        </div>
      ))}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("Wrap your component with NotificationProvider");
  }
  return context;
};

export default NotificationProvider;
