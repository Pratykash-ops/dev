import Button from "@/components/plugins/Button";
import Discord from "@/components/plugins/Discord";
import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const defaultStat = {
    online: true,
    totalPlayers: 3,
    totalEconomy: 999,
    lastUpdate: new Date().toTimeString(),
  };
  const [stat, setStat] = useState(defaultConfig);
  const [AnnouncementShown, setAnnouncementShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      let newAudio = new Audio("/static/media/pling.mp3");
      let bool = localStorage.getItem("AnnouncementShown");
      if (!bool) {
        setAnnouncementShown(true);
        newAudio.play();
        localStorage.setItem("AnnouncementShown", "true");
      }
    }, 5000);
    fetch("https://api.mcstatus.io/v2/status/java/hyosan2.aternos.me").then(
      async (raw) => {
        const res = await raw.json();
        setStat((prev) => ({
          ...prev,
          online: res.online,
          lastUpdate: new Date(res.retrieved_at).toTimeString(),
        }));
      }
    );
    return () => {
      setStat(defaultStat);
      setAnnouncementShown(false);
    };
  }, []);
  return (
    <>
      {/* Header */}
      <div
        className={`bg-black  w-80 p-5 h-60 shadow-md fixed z-[99] bottom-8 rounded-md transition-transform ease-in-out ${
          AnnouncementShown ? "left-8" : "-left-96"
        }`}
      >
        <button className="bg-green-200 text-green-700 rounded-xl px-3 py-1 absolute right-2 text-sm">
          Info
        </button>
        <div className="py-3 px-1">
          <svg
            className="w-10 h-9"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <p className="text-lg font-bold font-sans">Announcement</p>
        <div className="text-sm py-2 font-mono">
          In this new season we&apos;re renting the server from a exoroton, players
          are asked to donate a lumpsum or pay monthly charge of ₹60 for the
          well being of the server.
        </div>
      </div>

      <div
        className="hero md:h-[88vh] h-[69vh]"
        style={{
          backgroundImage: "url(/static/farmhouse-2.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent from-[1%] md:h-[88vh] h-[69vh]" />
        <div className="hero-content text-center text-white">
          <div className="max-w-md flex items-center flex-col">
            <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">
              Welcome to the official website of Hyosan Minecraft SMP!
            </p>
            <Link href={"https://discord.gg/c65qgE7UyE"} target="_blank">
              <Discord />
            </Link>
          </div>
        </div>
      </div>
      <div className="main bg-[url(/static/assets/pattern-0.svg)] bg-no-repeat bg-cover p-8">
        <div className="section  flex items-center justify-between text-white space-x-16">
          <div className="min-h-64 space-y-2 md:max-w-[46%] max-w-96 bg-base-100/50 /10 backdrop-blur-md flex flex-col items-start p-5 rounded-xl">
            <span className="outline outline-1 outline-yellow-500 px-2 rounded-lg font-light text-yellow-500">
              What it is?
            </span>
            <h2 className="text-2xl">About</h2>
            <p className="font-thin">
              Hey there, Minecraft Adventurers! <br />
              Build epic creations, or join your pals in some questionable
              architectural decisions. - Trade, raid, or just chill - the server
              is your oyster! Ready to roll? Grab your pickaxe and join the
              chaos!
              <br />
              See you in the pixelated mayhem of Hyosan SMP! 🎮✨
            </p>
          </div>
          <Image
            className="hidden md:block drop-shadow "
            src={"/static/assets/title.png"}
            height={540}
            width={540}
          ></Image>
        </div>
        <div className="section flex-wrap flex items-center justify-center md:justify-between md:p-9 p-2 text-white space-x-16 border-b">
          <aside className="bg-black/50 text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 text-red-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
              <p className="text-green-400">Server Info</p>
              <p className="text-white">IP: Hyosan.exaroton.me</p>
              <p className="text-white">Port: 161XX</p>
              <p className="text-green-400">$</p>
            </div>
          </aside>
          <div className="stats md:stats-vertical stats-horizontal bg-black/60 shadow-lg shadow-gray">
            <div className="stat">
              <div className="stat-title">Status</div>
              <div
                className={`stat-value ${
                  stat.online ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.online ? "Online" : "Offline"}
              </div>
              <div className="stat-desc">Last: {stat.lastUpdate}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Player</div>
              <div className="stat-value">4</div>
              <div className="stat-desc">Till now</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Economy</div>
              <div className="stat-value">2.5M</div>
              <div className="stat-desc">Today</div>
            </div>
          </div>
        </div>
        <div className="section p-8">
          <h2 className="text-4xl">Features</h2>
          <div className="flex flex-wrap items-center justify-between p-7">
            <div className="card w-80 bg-base-100/50 shadow-yellow-600 shadow-xl">
              <figure>
                <img src="/static/stronghold-3.png" alt="stronghold" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Custom Landscape Generator!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  Generates a more realistic landscape, add different structures
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Testing</div>
                  <div className="badge badge-outline">Beta</div>
                </div>
              </div>
            </div>
            <div className="card w-80 bg-base-100/50 shadow-sky-600 shadow-xl">
              <figure>
                <img
                  src="https://staticg.sportskeeda.com/editor/2023/04/8f0a9-16828528545126-1920.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Servers Economy!
                  <div className="badge badge-secondary">Renowned</div>
                </h2>
                <p>The server economy is back, with currency YEN</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Demanding</div>
                </div>
              </div>
            </div>
            <div className="card w-80 bg-base-100/50 shadow-green-600 shadow-xl">
              <figure>
                <img
                  src="https://static.wikia.nocookie.net/songs-of-war-wiki/images/4/4d/Songs_of_War_Season_1_Trailer_Thumbnail.jpg/revision/latest?cb=20191124111621"
                  alt="war"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Better Teams Introduced!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Now you can join, create, ally teams!</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Trending</div>
                  <div className="badge badge-outline">Beta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section p-8">
          <h2 className="text-4xl">Timeline</h2>
          <ul className="timeline timeline-snap-icon text-gray-200 max-md:timeline-compact timeline-vertical">
            <li className="text-sm">
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-normal">Mar 2022</time>
                <div className="text-lg font-black">Our First SMP</div>
                SMP kicked off with 8 mates, a warehouse, and big dreams. Java,
                Bedrock – everyone&apos;s invited to the block party! Together, we
                built a Town Hall, drafted a Constitution (the blocky Bill of
                Rights), and turned the server into a lively virtual hangout.
                Cheers to the ongoing saga of SMP - where pixels meet pals, and
                every day is a new adventure! Join the fun, because who said
                building friendships can&apos;t be a blast? 🎮🌟
              </div>
              <hr />
            </li>
            <li className="text-sm">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-normal">Sept 2022</time>
                <div className="text-lg font-black">A Only Bedrock SMP</div>
                In September &apos;22, our Bedrock SMP journey kicked off with
                medieval dreams. Some went full castle mode, others took a
                different path - chaos embraced, and our SMP became beautifully
                broken. Kingdom walls and castle laughs defined our Bedrock
                brotherhood. The theme got a bit lost, but our community found
                its groove. Cheers to the glorious mess and the bond that makes
                SMP a Bedrock haven. Medieval vibes may have scattered, but the
                fun&apos;s intact. Join the bedlam, celebrate the chaos, and let&apos;s
                keep the Bedrock adventures rolling! 🌟🎮
              </div>
              <hr />
            </li>
            <li className="text-sm">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-normal">Last SMP</time>
                <div className="text-lg font-black">Hyosan</div>
                Our first Hyosan SMP was a blast with 16 players crafting a
                world where creativity knew no bounds. Picture this - the epic
                Hyosan Tower, a lively Town Hall, and even an SMP Trailer. We
                went all out with 10+ unique houses, each telling a different
                story. The world was as open as our imaginations, letting
                creativity run wild. From towering structures to cozy nooks,
                everyone added their touch. It was a pixelated playground where
                every build had a tale. With factions named Hyosan and Germany,
                we added a touch of friendly rivalry to the mix. Join the fun,
                celebrate the laughs, and dive into the memories that made the
                first Hyosan SMP a hit! Here&apos;s to creativity, chaos, and
                countless adventures! 🏡🎉
              </div>
              <hr />
            </li>
            <li className="text-sm">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-normal">Now</time>
                <div className="text-lg font-black">Hyosan Rebirth</div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
