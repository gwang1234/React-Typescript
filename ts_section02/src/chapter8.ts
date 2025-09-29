import { error } from "console";

// 서로소 유니온 타입
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

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
