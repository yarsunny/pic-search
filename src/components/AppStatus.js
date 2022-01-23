import React from "react";
import { useOnlineStatus } from "../onlineStatus";

function AppStatus() {
  const online = useOnlineStatus();

  return (
    <div>
      {online ? (
        <span className="text-sm text-green-600 ml-1">online</span>
      ) : (
        <span className="text-sm text-red-500 ml-1">offline</span>
      )}
    </div>
  );
}

export default AppStatus;
