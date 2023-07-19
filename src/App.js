import Hook2 from "./Hooks/useEffect-Hook";
import Hook3 from "./Hooks/useReducerHook";
import Hook4 from "./Hooks/useRef-Hook";
import Hook5 from "./Hooks/useContext-Hook";
import Hook6 from "./Hooks/useCallback-Hook";
import Hook7 from "./Hooks/useMemo-Hook";
import Hook8 from "./Hooks/useFetchHook";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Link to="/effect">Effect </Link> &nbsp;&nbsp;
        <Link to="/ref">Ref </Link> &nbsp;&nbsp;
        <Link to="/reducer">Reducer </Link> &nbsp;&nbsp;
        <Link to="/context">contect </Link> &nbsp;&nbsp;
        <Link to="/callback">callback </Link> &nbsp;&nbsp;
        <Link to="/memo">memo </Link>&nbsp;&nbsp; 
        <Link to="/fetch">fetch </Link> &nbsp;&nbsp;
      </div>
        <Routes>
          <Route path="/effect" element={<Hook2 />}></Route>
          <Route path="/reducer" element={<Hook3 />}></Route>
          <Route path="/ref" element={<Hook4 />}></Route>
          <Route path="/context" element={<Hook5 />}></Route>
          <Route path="/callback" element={<Hook6 />}></Route>
          <Route path="/memo" element={<Hook7 />}></Route>
          <Route path="/fetch" element={<Hook8 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
