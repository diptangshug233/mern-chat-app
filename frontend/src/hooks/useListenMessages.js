import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
import { useEffect } from "react";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const check = newMessage.senderId == selectedConversation._id;
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      if (check) setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages]);
};
export default useListenMessages;
