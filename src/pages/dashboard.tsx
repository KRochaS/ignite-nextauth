import { useContext, useEffect } from "react";

import Achieved from "../components/Achieved";
import { Button } from "../components/Button";
import { Can } from "../components/Can";
import { Nps } from "../components/Nps";
import { Unauthorized } from "../components/Unauthorized";
import { WeeklySales } from "../components/WeeklySales";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  const userHasValidPermissions = useCan({
    permissions: ["metrics.list"],
    roles: ["administrator"],
  });

  useEffect(() => {
    api
      .get("/me")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="pl-3">
        <Button heightValue={20} onClick={signOut}>
          Sign out{" "}
        </Button>
      </div>

      <main className="grid justify-center gap-x-8 gap-y-8 p-[112px]">
        <Nps />
        <Achieved
          title="Closed sales"
          achievedPercent={{ image: "/sales-circle.svg", percent: "70%" }}
          achievedProcessInfo={{ expected: "100", achieved: "70" }}
        />

        <Achieved
          title="Monthly goal"
          achievedPercent={{ image: "/goal-circle.svg", percent: "90%" }}
          achievedProcessInfo={{ expected: "$ 70K", achieved: "$ 63K" }}
        />

        <div className="col-span-3 rounded-2xl bg-gray-400 px-12 py-[29px] shadow-3xl">
          <div className="flex flex-col gap-4">
            <Can permissions={["metrics.list"]}>
              <WeeklySales />
            </Can>

            {!userHasValidPermissions && <Unauthorized />}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  console.log("response ssr", response.data);

  return {
    props: {},
  };
});
