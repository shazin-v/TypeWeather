"use client";

import React, { useEffect, useState } from "react";
import Weather from "@/components/Weather";
import getFormattedWeatherData from "@/services/weatherServices";

type Props = {};

const page = (props: Props) => {
  return <Weather />;
};

export default page;
