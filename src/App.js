import { Routes, Route } from "react-router-dom";

import Home from "./navigation/home/home.component";
import Navigation from "./routes/navigation/navigation.component";


const App = () => {

  return(
    <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
    </Route>
  );
}

export default App;