# react-calendarien
---
리액트 달력입니다.<br/>
아직 완벽하진 않습니다.<br/>
현재 계속해서 개발중이며, 최적화 진행중입니다.<br/>

!! **주의** IE 에서는 아직 동작하지 않습니다. (Edge 는 가능합니다.)

## Props
name|type|default|description
----|----|-------|-----------
style|object|{ <br/>width:'100%'<br/>height: 'inherit'<br/>color: '#262626'<br/>}|layout 의 스타일을 담을 수 있습니다.
getValue|function||선택한 날의 정보를 가져올 수 있습니다. <br/> default return "yyyy mm dd"
customizeIcon|array|[ ]|버튼을 커스터마이징 할 수 있습니다. <br/> default icon <, >
layoutOption|array|[ ]|layout 의 디자인을 조금 변경가능하다. <br/> 값 .. ['outline', 'radius']
setFormat|string|yyyy mm dd|getValue 에서 return 되는 데이터의 형태를 바꿀 수 있습니다.
setDate|string||원하는 날의 달력을 render 시에 보여준다.<br/>하단에 'MY DATE' 버튼이 함께 생성된다.
visibleToday|boolean|false|하단 "TODAY" 버튼 가시화
visibleMyDate|boolean|false|setDate 옵션 추가시 자동적으로 나오는 'MY DATE' 버튼의 가시화를 정한다.
disabled|boolean|false|이전 날짜는 선택하지 못하도록 막는 기능이다.
theme|string||달력테마 디자인을 설정합니다.<br/> darkblue, forest, gd_darkblue, gd_sunset<br/> * gd가 붙은건 그라데이션을 의미함
mode|string||모드를 설정 하여 다양한 형태의 달력을 출력한다. <br/> input > input 에 focus 를 주면 달력이 나온다.

## Useage
create-react-app 을 사용했을 때의 경우 아래와 같이 테스트 합니다.<br/>


### 1. default example
---
```jsx
import React, { Component } from "react";
import Calendarien from './Calendarien';

class App extends Component {
    render() {
        return (
            <div>
                <Calendarien props... />
            </div>
        )
    }
} 
```

### 2. real time change 'setDate' example
---
```jsx
class App extends Component {

    handleDate = ({ value : date }) => {
         this.setState({ date });
    }

    state = {
        date: ''
    }
    
    render () {
        const { date } = this.state;
        return (
            <div>
                <Calendarien setDate={date} />
                <input 
                    type="text"  
                    onKeyPress={({key, target}) => key === 'Enter' && this.handleDate(target)} 
                />
            </div>
        )
    }
}
```
> date form 이 맞지 않을시 console.warn 을 출력합니다.

## Will be Update Function or Value
- mode [ <del><i>input</i></del>, <i>modal</i> ]
- allowRange
- View for Reactive Type ( mobile, web, tablet )

## If you are using an IE browser, you should read this
!! IE 적용시 react-app-polyfill 을 추가해야합니다.<br/>

<code>
> yarn add react-app-polyfill
</code>

```jsx
// index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
(... import code)
(... render code)
```

## Connect
Made by demnodey
- blog :: https://blog.naver.com/psj9102
- email :: psj9102@naver.com

## License
react-calendarien is released under the MIT license