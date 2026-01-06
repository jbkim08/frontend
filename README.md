# 🚀 User Management Fullstack App - Frontend

이 프로젝트는 **React**와 **Spring Boot**를 연동하여 만든 사용자 관리 시스템의 프론트엔드 애플리케이션입니다.

## 📋 주요 기능

- **사용자 목록 조회**: 등록된 모든 사용자의 정보를 테이블 형식으로 확인합니다.
- **사용자 추가**: 새로운 사용자를 등록할 수 있습니다 (이름, 유저네임, 이메일).
- **사용자 정보 수정**: 기존 사용자의 정보를 수정할 수 있습니다.
- **사용자 상세 보기**: 특정 사용자의 상세 정보를 확인합니다.
- **사용자 삭제**: 특정 사용자를 목록에서 삭제할 수 있습니다.

## 🛠 사용된 기술 (Tech Stack)

- **Framework**: [React 19](https://react.dev/) (Vite 기반)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 🏗 프로젝트 구조

```text
src/
├── layout/
│   └── Navbar.jsx      # 상단 네비게이션 바 구성
├── pages/
│   └── Home.jsx        # 메인 페이지 (전체 사용자 목록 출력)
├── users/
│   ├── AddUser.jsx     # 새로운 사용자 등록 폼
│   ├── EditUser.jsx    # 기존 사용자 정보 수정 폼
│   └── ViewUser.jsx    # 개별 사용자 상세 정보 조회
├── App.jsx             # 라우팅 및 전체 애플리케이션 구조 설정
└── main.jsx            # React 앱 렌더링 시작점
```

## ⚙️ 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 애플리케이션 실행

```bash
npm run dev
```

실행 후 터미널에 표시되는 URL(기본: `http://localhost:5173`)로 접속합니다.

## 🔗 백엔드 연동 (Backend Connection)

이 프론트엔드 앱은 기본적으로 아래의 백엔드 API 서버와 통신하도록 설정되어 있습니다.

- **API URL**: `http://localhost:8080/users`

> **주의**: 애플리케이션의 모든 기능을 사용하려면 Spring Boot 백엔드 서버가 로컬에서 실행 중이어야 합니다.

---

© 2026 User Management System
