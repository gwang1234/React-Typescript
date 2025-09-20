// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "김민정",
  nickname: "winter",
  birth: "2002.02.25",
  bio: "안녕하세요",
  location: "금천구",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  Korea: string;
};

let CountryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  Japan: "jp",
};
