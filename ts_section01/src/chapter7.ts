// void
// 아무것도 없음을 의미하는 타입
// undefined만 담을 수 있음
function func(): void {
  console.log("Hello World!");
}

// never
// 불가능한 타입

function func2(): never {
  while (true) {}
}

function func3(): never {
  throw new Error();
}
