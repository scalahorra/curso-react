import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "Anc_Aesthetics",
    name: "Aesthetica",
    isFollowing: false,
  },
  {
    userName: "hasanthehun",
    name: "hasanabi",
    isFollowing: true,
  },
  {
    userName: "InformaCosmos",
    name: "Somos Cosmos",
    isFollowing: false,
  },
  {
    userName: "Valkyrae",
    name: "RAE",
    isFollowing: true,
  },
  {
    userName: "illojuan",
    name: "IlloJuan",
    isFollowing: true,
  },
  {
    userName: "pokimanelol",
    name: "pokimane",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
