import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  const [location, setLocation] = useState({ lat: 37.5528853346466, lng: 126.831502922704 }); // 기본 위치

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
        },
        (error) => {
          console.error("위치 정보를 가져올 수 없습니다.", error);
        }
      );
    } else {
      console.error("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "97%", display: "flex", justifyContent: "center" }}>
      <Map
        center={{ lat: location.lat, lng: location.lng }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
   
      </Map>
    </div>
  );
}

export default KakaoMap;
