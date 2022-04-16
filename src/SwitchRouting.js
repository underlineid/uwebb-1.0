import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { loginStatus } from "./helpers/util";

const UnAuthRouting = lazy(() => import("./UnAuthRouting"));
const LoggedInRouting = lazy(() => import("./LoggedInRouting"));

function SwitchRouting() {
  const isLogin = loginStatus();
  const loggedInRoute = (
    <Suspense fallback={<Spin />}>
      <LoggedInRouting />
    </Suspense>
  );
  const authRoute = (
    <Suspense fallback={<Spin />}>
      <UnAuthRouting />
    </Suspense>
  );

  return isLogin ? loggedInRoute : authRoute;
}

export default SwitchRouting;
