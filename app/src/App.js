import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import DiyPostList from "./DiyPostList";
import DiyPostSingle from "./DiyPostSingle";
import Tasks from "./Tasks";

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/:id" element={<DiyPostSingle />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Tasks />
    <DiyPostList />
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
