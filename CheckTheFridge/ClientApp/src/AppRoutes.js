import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { IngredientList } from "./components/IngredientList";
import { AddIngredient } from "./components/AddIngredient";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/add-ingredient',
      //element: <IngredientList />,
    element: <AddIngredient />
  }
];

export default AppRoutes;
