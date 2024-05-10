
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import SurveyItem from "./components/Survey/SurveyItem";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/survey/:id',
    element: <SurveyItem />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
