import Image from "next/image";
import react, { useEffect, useState } from "react";

export default function account() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage) {
      setLoading(true);
      const token = localStorage.getItem("hyosan_player_token");
      if (token) {
        const playerData = localStorage.getItem("playerData");
          const playerDJson = JSON.parse(playerData || '{}');
          if (playerDJson.lastChecked < (Date.now()) - 1000 * 60 * 30 || !playerData) {
            fetch("/api/user?token=" + token).then(async (r) => {
              const res = await r.json();
              if (r.ok) {
                let d = { ...res.data, lastChecked: Date.now() };
                localStorage.setItem("playerData", JSON.stringify(d));
                setPlayer(d);
              }
            });
        }
          else{
            setPlayer(playerDJson)
          }
      }
      setLoading(false);
    }
  }, []);
  return (
    <div className="min-h-screen p-14">
      <div className="main-profile-section flex items-center p-8 justify-evenly">
        <Image
          src={"https://mc-heads.net/body/cool/right"}
          width={180}
          height={432}
        ></Image>
        <div>
            {player && <div className="space-y-4 p-6 bg-black">
            <h2>Username: {player.username}</h2>
            <p>IP: {player.ip}</p>
            <p>Email: {player.email || "Email not set"}</p>
            <p>Bank Balance: {player.balance} Yen</p>
            <p>lastLogin: {new Date(player.lastlogin).toUTCString()}</p>
            <span className="text-xs text-gray-400">Registered At: {player.regdate}</span>
            </div>}
        </div>
      </div>
    </div>
  );
}
