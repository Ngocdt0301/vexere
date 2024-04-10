import LayoutAdmin from "./components/layout/layoutAdmin";
import LayoutWebsite from "./components/layout/layoutWebsite";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list";
import Detail from "./pages/detail";
import axios from "axios";
import { useEffect, useState } from "react";
import { IBusHouse, ITrip } from "./interface/interface";
import Update from "./pages/update";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  const [trips, setTrips] = useState<ITrip[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/trips");
      // console.log(data);
      setTrips(data);
    })();
  }, []);
  const [busHouses, setBusHouses] = useState<IBusHouse[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/busHouses");
      // console.log(data);
      setBusHouses(data);
    })();
  }, []);
  const [stations, setStations] = useState<IBusHouse[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/stations");
      // console.log(data);
      setStations(data);
    })();
  }, []);
  const onAdd = async (trip: ITrip[]) => {
    try {
      const { data } = await axios.post("http://localhost:3000/trips", trip);
      setTrips([...trips, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onRemove = async (id: ITrip[]) => {
    try {
      await axios.delete("http://localhost:3000/trips/" + id);
      setTrips(trips?.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const onUpdate = async (trip: ITrip[]) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/trips/${trip.id}`,
        trip
      );
      
      console.log(data);
      setTrips(trips.map((i) => (i.id == data.id ? data : i)));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <LayoutWebsite/> */}
      <Routes>
        <Route index element={<LayoutWebsite />}></Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<List trips={trips} onRemove={onRemove} />} />
          <Route
            path="add"
            element={
              <Detail busHouses={busHouses} stations={stations} onAdd={onAdd} />
            }
          />
          <Route
            path="update/:id"
            element={
              <Update
                busHouses={busHouses}
                stations={stations}
                onUpdate={onUpdate}
              />
            }
          />
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
