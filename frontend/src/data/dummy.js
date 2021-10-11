const dummy = {
  city: [
    { label: "서울", number: 1 },
    { label: "경기", number: 2 },
    { label: "강원", number: 3 },
    { label: "인천", number: 4 },
    { label: "충북", number: 5 },
  ],

  town: [
    { label: "강릉", number: 1 },
    { label: "부천", number: 2 },
    { label: "양양", number: 3 },
    { label: "구로", number: 4 },
    { label: "영등포", number: 5 },
  ],

  category: ["맛집리뷰", "공동구매", "잡담"],
}

export const commentsData = [
  {
    nick: "elice",
    city: "서울특별시",
    town: "구로구",
    category: "잡담",
    text: "숯불치킨이 땡기네요...",
    likedNum: 5,
    likedPeople: ["a", "b", "c", "d", "e"],
  },
  {
    nick: "queen",
    city: "강원도",
    town: "강릉시",
    category: "맛집리뷰",
    text: "짬뽕순두부가 맛있어요!",
    likedNum: 3,
    likedPeople: ["a", "b", "c"],
  },
  {
    nick: "cheshire",
    city: "경기도",
    town: "수원시",
    category: "잡담",
    text: "왕갈비 통닭 추천합니다",
    likedNum: 6,
    likedPeople: ["a", "b", "c", "d", "e", "f"],
  },
  {
    nick: "King",
    city: "전라남도",
    town: "여수시",
    category: "잡담",
    text: "간장게장 어떠세요?",
    likedNum: 3,
    likedPeople: ["a", "c", "d"],
  },
  {
    nick: "rabbit",
    city: "서울특별시",
    town: "영등포구",
    category: "공동구매",
    text: "대용량 누네띠네 공구하실분 구해요!",
    likedNum: 1,
    likedPeople: ["a"],
  },
]

export default dummy
