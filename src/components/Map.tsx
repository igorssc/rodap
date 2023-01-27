import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -19.783173,
  lng: -43.913964,
};

const markerPoints = [
  {
    lat: -19.77677800179209,
    lng: -43.87704976727895,
  },
  {
    lat: -19.783173,
    lng: -43.913964,
  },
  {
    lat: -19.80757763131498,
    lng: -43.97980888993906,
  },
  {
    lat: -19.77677800179209,
    lng: -43.87704976727895,
  },
];

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_GOOGLE || "",
  });

  return (
    <div className="h-[350px] md:h-[500px]">
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            clickableIcons={false}
          >
            {markerPoints.map((v, i) => (
              <Marker key={i} position={v} />
            ))}
          </GoogleMap>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
