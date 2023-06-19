import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helpers/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={`Foto ${id}`} description="Página com foto única" />
        <PhotoContent data={data} single={true} />
      </section>
    );
  } else return null;
};

export default Photo;
