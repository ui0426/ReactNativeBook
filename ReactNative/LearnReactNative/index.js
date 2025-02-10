/**
 * @format
 * 코드 스타일을 자동으로 정리해주는 Prettier 도구와 관련있음
 */

// index는 프로젝트의 엔트리 파일. 생성한 리액트 네이티브 앱은 ㅇ ㅣ파일에서 시작

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//네이티브 시스템에 컴포넌트를 등록해줌.
AppRegistry.registerComponent(appName, () => App);
