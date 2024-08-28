import MainLayout from "./components/MainLayout";
import { WeaponsProvider } from "./context/WeaponsContext";
import WeaponsList from "./pages/WeaponsList";

function App() {
  return (
    <WeaponsProvider>
      <MainLayout>
        <WeaponsList />
      </MainLayout>
    </WeaponsProvider>
  );
}

export default App;
