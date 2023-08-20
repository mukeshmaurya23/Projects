import { useDispatch } from "react-redux";
import "./App.css";
import DemoTable from "./components/DemoTable";

import { useEffect } from "react";
import { fetchRowApi } from "./store/rowApiSlice";

function App() {
  const rowdDataDispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    rowdDataDispatch(fetchRowApi());
  }, []);
  return (
    <>
      {/* <TableComponent /> */}
      {/* <TableDataGrid /> */}
      <DemoTable />
    </>
  );
}

export default App;
