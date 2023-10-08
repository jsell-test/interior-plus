/**
 * id : 데이터베이스에 저장된 상품의 고유번호
 * title : 판매자가 작성한 제목
 * price : 판매자가 설정한 가격
 * location : 판매자의 위치
 * likes : 사용자들이 누른 좋아요 수
 * mainImageUrl : 판매자가 설정한 상품의 메인 이미지 Url
 */
export interface GetRecentFurniture {
  id: number;
  title: string;
  price: number;
  location: string;
  likes: number;
  mainImageUrl: string;
}
