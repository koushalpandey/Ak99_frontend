import { useEffect } from "react";
import useLocationStore from "../../store/userLoactionStore/store";
import { useGeolocated } from "react-geolocated";



const LocationProvider = () => {
  const { setLocation, setLoading, setError } = useLocationStore();

  const {
    coords,
    positionError,
    isGeolocationAvailable,
    isGeolocationEnabled,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    },
    suppressLocationOnMount: false,
    watchPosition: false,
  });

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  useEffect(() => {
    if (!isGeolocationAvailable) {
      setError("Geolocation is not supported by this browser.");
    }
  }, [isGeolocationAvailable, setError]);

  useEffect(() => {
    if (isGeolocationEnabled === false) {
      setError("Location permission denied.");
    }
  }, [isGeolocationEnabled, setError]);

  useEffect(() => {
    if (positionError) {
      setError(positionError.message);
    }
  }, [positionError, setError]);

  useEffect(() => {
    if (coords) {
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy,
      });
    }
  }, [coords, setLocation]);

  return null;
};

export default LocationProvider;