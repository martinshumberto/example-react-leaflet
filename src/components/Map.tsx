import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS } from "leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[650, 1000]}
      zoom={-1}
      scrollWheelZoom={true}
      crs={CRS.Simple}
      minZoom={-1}
      maxZoom={1}
    >
      <Marker position={[650, 1000]}>
        <Popup>Marker example</Popup>
      </Marker>
      <ImageOverlay
        bounds={[
          [0, 0],
          [1373, 2103],
        ]}
        url="src/assets/map/map.jpg"
      />

      {/* Method Tile - Generate by vips.exe (https://github.com/libvips/libvips) */}
      {/* <TileLayer tileSize={256} url="src/assets/tiles/{z}/{y}/{x}.jpg" /> */}
    </MapContainer>
  );
}
