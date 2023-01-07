import Header from "./components/Header";
import TravelCard from "./components/TravelCard";
import data from "./data";
export default function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((item) => (
          <TravelCard {...item} key={item.id} />
        ))}
      </main>
    </>
  );
}
