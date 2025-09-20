# 타입스크립트 기본

### 원시타입 (primitive Type)

- 하나의 값만 저장하는 타입
- `number`, `string`, `boolean`, `null`, `undefined`

<br>

number 타입

```ts
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // not a number, 유효한 수치 연산 결과가 아님
```

- 여기서 `:number`는 주석 또는 타입 어노테이션(annotation)이라 불림

<br>

string 타입

```ts
// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
```

- 탬플릿 리터럴 문자열도 모두 다 문자열 타입에 포함

<br>

boolean 타입

```ts
let bool1: boolean = true;
let bool2: boolean = false;
```

<br>

null 타입

```ts
let null1: null = null;
```

<br>

undefined 타입

```ts
let unde1: undefined = undefined;
```

<br>

> 여기서 number, string 등 null을 넣어야 할 때가 있는데  
> 이럴때 엄격한 null체크를 안하고 싶으면 `tsconfig.json`에서 "strictNullChecks": false 설정 추가

> `strict`는 `strictNullChecks`의 상위 옵션

<br>

리터럴 타입

- 값 그 자체가 타입이 되는 타입
- 원시타입에 안에 포함되는 값 중에 하나를 타입인것처럼 정의해서 사용할 수 있다

```ts
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
```

<br><br>

### 배열과 튜플

<br>

배열

```ts
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "in", "winterlood"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

<br>

튜플

```ts
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];
```

- 배열 메서드를 사용할 때는 튜플의 길이 제한이 발동되지 않는다
- 자바스크립트의 배열로 알아보기 때문
  - ex) tup1.push(1)

<br><br>

### 객체

- 객체를 정의할때 객체의 모든 프로퍼티들의 타입까지 구조적으로 다 정의할 수 있는 방식인 **객체 리터럴 타입**으로 정의
- **구조적 타입 시스템**: 구조를 기준으로 타입을 정의한다
- = Property based type system

<br>

```ts
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "김민정",
};

// 프로퍼티가 있어도 되고, 없어도 될 때는 ?로 표현
// ?는 선택적 프로퍼티
let user: {
  id?: number;
  name: string;
} = {
  name: "김민정",
};

// 프로포티의 값을 바꾸는 행위를 막기
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
```

<br><br>

### 타입 별칭과 인덱스 시그니처

타입 별칭

- 공통적으로 적용되어야 하는 타입을 정의

```ts
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
```

- 같은 스코프(변수와 함수가 사용 될 수 있는 범위) 내에서는 중복되지 않도록 해야한다

<br>

인덱스 시그니처

- 객체의 키와 값의 타입을 미리 정의하는 문법

```ts
type CountryCodes = {
  [key: string]: string;
};

let CountryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  Japan: "jp",
};
```

- 규칙을 위반하는 프로퍼티가 없으면 검사 통과
- 꼭 있어야 하는 프로퍼티는 정의

```ts
type CountryCodes = {
  [key: string]: string;
  Korea: string;
};
```

<br><br>

### 열거형 타입

- enum 타입
- 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

```ts
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "김민정",
  role: Role.ADMIN,
};
```

<br>

숫자를 지정하지 않으면 자동으로 0부터 +1씩 지정된다

```ts
enum Role {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}
```

<br>

숫자를 지정하면 해당 숫자부터 자동으로 +1씩 지정된다

```ts
enum Role {
  ADMIN = 10,
  USER,
  GUEST,
}
```

- 각각의 멤버의 값이 숫자가 할당되는 enum -> **숫자형 enum**
- enum은 js로 변환시 사라지지 않고 자바스크립트 객체로 변환됨

<br><br>

### Any와 Unknown 타입

any

```ts
// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

// 타입스크립트의 타입 검사를 다 통과하는 치트키
let num: number = 10;
num = anyVar;
```

<br>

unknown

```ts
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 오류나는 코드
// any와 달리 모든 타입에 값을 집어넣을 수 없다
// any와 다르게 toUpperCase같은 메서드도 쓸 수 없다, 연산도 안됨
num = unknownVar;

// 타입 정제시 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
```

<br><br>

### void와 never

void

```ts
// void
// 아무것도 없음을 의미하는 타입
// undefined만 담을 수 있음
function func(): void {
  console.log("Hello World!");
}
```

<br>

never

```ts
// never
// 불가능한 타입, 반환이 불가능
// 어느 값도 담을 수 없음
function func2(): never {
  while (true) {}
}

function func3(): never {
  throw new Error();
}
```
