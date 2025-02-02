import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 }); // 기본 위치

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng }); // 현재 위치로 변경
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
    <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center" }}>
      <Map
        center={{ lat: location.lat, lng: location.lng }}
        style={{ width: "50%", height: "100%" }}
        level={3}
      >
        {/* 현재 위치에 마커 표시 */}
        <MapMarker position={{ lat: location.lat, lng: location.lng }}>
          <div style={{ padding: "5px", fontSize: "12px" }}>내 위치</div>
        </MapMarker>
      </Map>
    </div>
  );
}

export default KakaoMap;
