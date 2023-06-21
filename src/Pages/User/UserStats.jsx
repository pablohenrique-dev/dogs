import React from "react";
import Head from "../../Components/Helpers/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loading/Loading";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      const { json } = await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section>
        <Head
          title="Estatísticas"
          description="Estatísticas sobre as publicações"
        />
        <UserStatsGraphs data={data} />
      </section>
    );
  else return null;
};

export default UserStats;
