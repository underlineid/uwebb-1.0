import { loginStatus } from "./helpers/util";
import SwitchRouting from "./SwitchRouting";

function App() {
  const isLogin = loginStatus();
  console.log({ isLogin });

  return <SwitchRouting />;
}

export default App;
