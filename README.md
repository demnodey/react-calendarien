# react-calendarien
  
리액트 달력입니다.<br/>
아직 완벽하진 않습니다.<br/>
현재 계속해서 개발중이며, 최적화 진행중입니다.<br/>

주의 IE 에서는 아직 동작하지 않습니다. (Edge 는 가능합니다.)

## Useage
---
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
---
name|type|default|description
----|----|-------|-----------
layout|object|{ <br/> width:'100%' <br/> height: 'inheriet' <br/> color: '#262626' <br/> }|layout의 스타일을 담을 수 있습니다.
getValue|function||선택한 날의 정보를 가져올 수 있습니다. default "yyyy mm dd"
customizeIcon|array||버튼을 커스터마이징 할 수 있습니다. default <, >

## Will be Update Function or Value
---
- setFormat
- setDate
- onToday
- mode
- disabled
- btnOff
- allowRange

## Connect
---
Made by demnodey
- blog :: https://blog.naver.com/psj9102
- email :: psj9102@naver.com

## License
---
react-calendarien is released under the MIT license