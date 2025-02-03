import { useState, useEffect } from "react";
import KakaoMap from "../../KakaoMap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import OneroomData from "../../data/OneroomData";
import Carousel from "react-bootstrap/Carousel";

function OneRoomDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // ✅ 처음 로드될 때 localStorage에서 찜한 목록 불러오기
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteIds");
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites));
    }
  }, []);

  // ✅ 찜한 ID를 localStorage에 저장하는 함수
  const handleFavoriteClick = (id) => {
    setFavoriteIds((prev) => {
      let updatedFavorites;
      if (prev.includes(id)) {
        updatedFavorites = prev.filter((item) => item !== id); // 제거
      } else {
        updatedFavorites = [...prev, id]; // 추가
      }
      localStorage.setItem("favoriteIds", JSON.stringify(updatedFavorites)); // 로컬스토리지 저장
      return updatedFavorites;
    });
  };

  return (
    <div className="main_article">
      <div className="card_container">
        <Stack direction="horizontal" gap={2}>
          <Badge bg="dark">매물리스트</Badge>
        </Stack>
        {OneroomData.map((x) => (
          <div className="detail" key={x.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={x.img} />
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>{x.content}</Card.Text>
                <Button
                  variant={favoriteIds.includes(x.id) ? "danger" : "primary"}
                  onClick={() => handleFavoriteClick(x.id)}
                >
                  {favoriteIds.includes(x.id) ? "찜 취소" : "찜하기"}
                </Button>
                <Button
                  variant="primary"
                  style={{ margin: "10px" }}
                  onClick={() => setIsVisible(!isVisible)}
                >
                  상세보기
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="map">
        <KakaoMap />
      </div>

      <div
        className="card_visible"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <Carousel>
          {OneroomData.map((x) => (
            <Carousel.Item className="CarouselImg" key={x.id}>
              <img src={x.img1_1} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OneRoomDetail;
