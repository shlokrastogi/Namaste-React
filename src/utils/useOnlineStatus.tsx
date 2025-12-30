import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Checking if user is offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //Return boolean
  return onlineStatus;
};

export default useOnlineStatus;
