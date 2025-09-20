// Unknown 타입
function unknwonExma() {
  let a: unknown = 1;
  let b: unknown = true;
  let c: unknown = null;
  /// ... 모든 값을 넣을 수 있습니다.
  //  업캐스팅
  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  // 모든 값을 넣을 수 없습니다.
  // 다운 캐스팅
}

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  // never 타입은 모든 타입의 sub 타입이기때문에 그 어떤 타입 변수에도 넣을수있습니다
  // 업캐스팅
}

/**
 * void
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * void
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  anyVar = unknownVar;
  //  다운 캐스팅 해도 문제가 없습니다.
  undefinedVar = anyVar;
  //  다운 캐스팅 해도 문제가 없습니다.
  //   neverVar = anyVar;
  // 네버 타입에는 그 어떤 타입도 다운 캐스팅 할 수 없습니다.
}
