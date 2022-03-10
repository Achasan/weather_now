# 🌥 Weather Now

웨더나우는 기상청에서 제공하는 공공데이터 API를 사용하여 날씨정보를 제공하는 웹페이지 입니다.

주요 기능은 다음과 같습니다.

- 장소는 행신동 기준입니다.
- 현재날씨 제공 (기상청 초단기실황예보 기준)
- 시간 별 날씨 제공 (기상청 단기예보 기준)
- 주간예보 날씨 제공(개발중) (기상청 중기예보 API 기준)

<hr />

# 🔨 Stacks

- Frameworks
  - Spring Boot v2.6.8
  - React 17.0.2
  - JUnit 5

- Build Tool
  - Gradle

- IDE
  - IntelliJ IDEA

- Libraries
  - GSON
  - Lombok


## 구현한 기능

- Spring Boot
  - Spring MVC 패턴의 Layered Architecture 패턴을 이해하고 적용
    - Controller, Service, Repository로 역할을 나누고, 각 역할에 맞도록 메서드 작성, DI 설정

- React 
  - 컴포넌트를 생성하고 부모-자식 컴포넌트 설정
    - 부모컴포넌트에서 생성한 데이터를 자식컴포넌트로 props를 사용하여 넘겨주어 출력하기

- JUnit 5
  - VO, DTO 객체의 getter, setter 테스트코드 작성
  - Controller에서 메서드 호출 시 올바른 데이터를 가져오는지 확인하는 테스트코드 작성
  - API 테스트코드 작성
