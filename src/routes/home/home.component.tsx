import React from "react";

import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
    return (
      <div>
          <Directory category={undefined} />
          <Outlet />
      </div>
    );
};

export default Home;