# 타입 스크립트 이해

<br>

- 타입스크립트가 말하는 타입은 **집합**이다
  - 동일한 속성과 특징들을 갖는 여러 개의 값들을 모아둔 집합
- 타입끼리 계층적 구조를 가짐
  - number Type: 다른 타입을 포함하는 큰 타입 -> **부모 타입**, **슈퍼 타입**
  - number literal Type: 다른 타입에 포함되는 타입 -> **자식 타입**, **서브 타입**
- 타입 호환성: 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
  - 자식 타입 -> 부모 타입으로 호환 가능: `업 캐스팅`
  - 그 반대는 대부분의 상황에서 허용 X: `다운 캐스팅`

<br><br>

### 타입 계층도와 함께 기본타입 살펴보기

<img src="image/type.png">

<br>

Unknown 타입

- **전체 집합**
- 타입의 최상단에 위치

```ts
function unknwonExma() {
  let a: unKnown = 1;
  let b: unKnown = true;
  let c: unKnown = null;
  /// ... 모든 값을 넣을 수 있습니다.
  //  업캐스팅
  let unknownVar: unknown;

  let num: number = unknownVar;
  let str: string = unknownVar;
  // 모든 값을 넣을 수 없습니다.
  // 다운 캐스팅
}
```

<br>

Never 타입

- 공집합
- 모든 집합의 부분집합

```ts
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  // never 타입은 모든 타입의 sub 타입이기때문에 그 어떤 타입 변수에도 넣을수있습니다
  // 업캐스팅
}
```

<br>

Void 타입

```ts
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}
```

<br>

Any 타입

- 치트키 타입
- 타입 계층도를 완전히 무시
- 모든 타입의 다운캐스팅 업캐스팅 가능 (단! never 타입을 제외하고)

```ts
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  anyVar = unknownVar;
  //  다운 캐스팅 해도 문제가 없습니다.
  undefinedVar = anyVar;
  //  다운 캐스팅 해도 문제가 없습니다.
  neverVar = anyVar;
  // 네버 타입에는 그 어떤 타입도 다운 캐스팅 할 수 없습니다.
}
```

<br>

타입 호환성

<img src="image/type2.png" width=800>

<br><br>

### 객체 타입 호환성

```ts
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "푸들",
};

animal = dog; // 에러가 일어나지 않습니다
dog = animal; // 에러가 일어 납니다.
```

- **구조적 타입 시스템**이기 때문에 dog에 animal을 넣을 수 없다
  - 구조적 타입 시스템: 객체의 모양(shape, 구조) 을 기준으로 타입 호환성을 판단하는 시스템
  - **속성이 맞으면 같은 타입**으로 봄
  - `animal`이 기대하는 건 `name`과 `color` 속성 두 개뿐
  - `dog`는 `name`, `color`에 더해 `breed`까지 있으므로, 최소 조건을 만족
    <br>

<br>

```ts
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

let book2: Book = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  skill: "reactjs", // 오류가 출력됩니다
};
```

- 초과 프로퍼티 검사
  - 객체 리터럴을 사용하면 발동하는 검사로 객체 타입 변수를 초기화할떄 검사

<br><br>

### 대수 타입

- 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
- **합집합 타입**과 **교집합 타입**이 존재

<br>

#### 합집합 - Union 타입

```ts
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string)[] = [1, "hello"];
```

<br>

객체 합집합

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = {
  // 오류가 출력
  name: "",
};
```

- union1은 `Dog`타입에 포함
- union2는 `Person`타입에 포함
- union3은 `Dog`타입과 `Person`타입의 교집합에 포함
- union4는 어디에도 포함 X

<br>

#### 교집합 - Intersection 타입

```ts
let variable: number & string;
```

- 기본타입으로 교집합 타입을 만들면 거의 Never 타입이 된다.

<br>

객체 교집합

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
```

<br><br>

### 타입 추론

- TypeScript는 **점진적 타입 추론** 을 지원
  - 타입을 명시하지 않아도 **초기값으로 자동으로 추론하여 타입을 부여**한다.
  - 단, 함수 매개변수는 예외로 반드시 타입을 지정해야 한다.

<br>

```ts
let d;

d = 10; // number로 추론됨
d.toFixed();

d = "hello"; // string으로 추론됨
d.toUpperCase();
```

- 초기값이 생략되면 암묵적인 any 타입으로 추론된다.
  - any 타입 진화: 암묵적 any타입으로 추론되면 타입이 계속 진화할 수 있다.
  - 때문에 가능한 any타입 진화는 쓰지 말자

<br>

```ts
const num = 10; // number literal 타입으로 추론
const str = "hello"; // string literal
```

- const로 지정되면 literal 타입으로 추론된다.
- const가 아니면 범용적으로 사용할 수 있도록 **타입 넓히기**를 한다
  - 타입 넓히기: 특정 값을 더 일반적이고 넓은 범위의 타입으로 추론하는 과정

<br><br>

### 타입 단언

```ts
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김민정";
person.age = 27;
```

- 초기화 값의 타입을 지정해주는 방법이다.
- 초기화 값 뒤에 as + 타입명을 붙여줘서 초기화 값의 타입을 직접 단언한다.

<br>

```ts
type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;
```

- 초기화 시 초과 프로퍼티 검사로 인한 에러를 막기 위해 타입 단언을 활용할 수도 있다. - 이때 변수 뒤에 붙여뒀던 타입 주석을 제거해도 제대로 타입을 추론해준다.

<br>

타입 단언의 규칙

- 값 as 단언 <- 단언식
- A as B
- A가 B의 슈퍼타입이거나
- A가 B의 서브타입이어야 함

```ts
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as string; // 교집합 X, 오류
let num3 = 10 as string as unknown as string; // 가능, 사용금지
```

<br>

const 단언

```ts
let num4 = 10 as const; // number literal type

let cat = {
  name: "야옹",
  color: "yellow",
} as const; // 객체의 모든 프로퍼티가 readonly 읽기 전용 프로퍼티로 추론됨
```

- 변수를 const로 선언한 것과 동일한 효과를 만들어주는 단언

<br>

Not Null 단언

```ts
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "post1",
  author: "홍길동",
};

const len: number = post.author!.length;
```

- 어느 값이 null 혹은 undefined가 아니라고 알려주는 단언
- `!` 연산자를 활용

<br><br>

### 타입 좁히기

```ts
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.age);
  }
}
```

- 조건문 등을 이용해 넓은타입에서 좁은타입으로
- 타입을 상황에 따라 좁히는 방법을 이야기
- 이때 타입 좁히기를 도와주는 도구들을 **타입 가드**라고 한다
  - `typeof`
  - `A instanceof B` : A라는 값이 B객체(클래스)인가
  - `in` : 클래스 객체가 아닌 특정한 타입 객체인지 검사하고 싶다면 프로퍼티 검사

<br><br>

### 서로소 유니온 타입

- 교집합이 없는 타입들로만 만든 유니온 타입들 말함
  - ex. number과 string 타입

```ts
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.kickCount}명 강퇴`);
      break;
    case "MEMBER":
      console.log(`${user.point} 모음`);
      break;
    case "GUEST": {
      console.log(`${user.visitCount}번 방문`);
      break;
    }
  }
}
```

- Admin, Member, Guest 타입에 tag 프로퍼티가 string literal로 정의되어 있어서 세 타입은 모두 서로소 집합
