/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FullEventDetails from "../../components/FullEventDetails";
import makeRequest from "../../utils/makeRequest";
// import { AllEventDataContext } from "../../context/EventDetails";
import { GET_EVENT_DATA } from "../../constants/apiEndPoints";

function EventDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    makeRequest(GET_EVENT_DATA(id)).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div>
      <Header />
      <FullEventDetails data={data} setDatas={setData} />
      <Footer />
    </div>
  );
}

export default EventDetail;
