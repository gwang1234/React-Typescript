// 자동 추론의 기준은 초깃갑
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "hong",
  },
  url: ["https://"],
};

// 구조 분해 할당도 가능
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;

d = 10; // number로 추론됨
d.toFixed();

d = "hello"; // string으로 추론됨
d.toUpperCase();

const num = 10; // number literal 타입으로 추론
const str = "hello"; // string literal
