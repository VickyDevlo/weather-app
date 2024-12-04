import React from "react";
import { Button } from "@/components/ui";
import { MapPin, RefreshCcw } from "lucide-react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { LoadingSkeleton } from "@/shared/LoadingSkeleton";
import { AlertMsg } from "@/shared/AlertMsg";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/useWeather";
import CureentWeather from "@/components/currentWeather/CureentWeather";

const Dashboard = () => {
  const {
    coordinates,
    error: locatioError,
    isLoading: locationLoading,
    getLocation,
  } = useGeoLocation();

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <LoadingSkeleton />;
  }
  if (locatioError) {
    return (
      <AlertMsg
        title={"Location Erorr"}
        desc={locatioError}
        onClick={getLocation}
        type={"error"}
        btnText="Enable Location"
        icon={<MapPin className="mr-2 h-4 w-4" />}
      />
    );
  }
  if (!coordinates) {
    return (
      <AlertMsg
        title={"Location Required"}
        desc={"Please enable location access to see your local weather."}
        onClick={getLocation}
      />
    );
  }

  const locationName = locationQuery?.data?.[0];

  if (weatherQuery.error || locationQuery.error) {
    return (
      <AlertMsg
        title={"Erorr"}
        desc={"Failed to fetch weather data. Please try again."}
        onClick={handleRefresh}
        btnText="retary"
        icon={<RefreshCcw className="mr-2 h-4 w-4" />}
      />
    );
  }
  if (!weatherQuery.data || !forecastQuery.data) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCcw
            className={`h-4 w-4 ${
              weatherQuery.isFetching ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>
      <div className="grid gap-6">
        <div className="">
          <CureentWeather
            data={weatherQuery?.data}
            locationName={locationName}
          />
        </div>
        <div className="">{/* deatils */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
