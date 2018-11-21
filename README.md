# react-calendarien
---
리액트 달력입니다.<br/>
아직 완벽하진 않습니다.<br/>
현재 계속해서 개발중이며, 최적화 진행중입니다.<br/>

!! **주의** IE 에서는 아직 동작하지 않습니다. (Edge 는 가능합니다.)

## Useage
create-react-app 을 사용했을 때의 경우 아래와 같이 테스트 합니다.
```jsx
import React, { Component } from "react";
import Calendarien from 'components/Calendarien';

class App extends Component {
    render() {
        return (
            <div>
                <Calendarien />
            </div>
        )
    }
} 
```
## Props
name|type|default|description
----|----|-------|-----------
style|object|{ <br/>width:'100%'<br/>height: 'inheriet'<br/>color: '#262626'<br/>}|layout 의 스타일을 담을 수 있습니다.
getValue|function||선택한 날의 정보를 가져올 수 있습니다. <br/> default return "yyyy mm dd"
customizeIcon|array|[ ]|버튼을 커스터마이징 할 수 있습니다. <br/> default icon <, >
setFormat|string|yyyy mm dd|getValue 에서 return 되는 데이터의 형태를 바꿀 수 있습니다.
setDate|string||원하는 날의 달력을 render 시에 보여준다.<br/>하단에 'MY DATE' 버튼이 함께 생성된다.
visibleToday|boolean|false|하단 "TODAY" 버튼 가시화
visibleMyDate|boolean|false|setDate 옵션 추가시 자동적으로 나오는 'MY DATE' 버튼의 가시화를 정한다.

## Will be Update Function or Value
- mode
- disabled
- allowRange

## Connect
Made by demnodey
- blog :: https://blog.naver.com/psj9102
- email :: psj9102@naver.com

## License
react-calendarien is released under the MIT license