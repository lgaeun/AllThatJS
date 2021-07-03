# 함수형 vs 클래스형 비교
  1. 함수형 컴포넌트: 
      ```javascript
      // 작성 형태
      const A () => {
        const item = ...
        ...
        return()
      }
      //or 
      function A() {
      } 
      
      ```
     - 클래스형 컴포넌트보다 더욱 간단하게 state 변경 등 가능. React Hook 이용해서 state 관리 가능해 짐
     - functional component는 class component, did mount, render등 필요없이 다 하나의 function으로 해결 가능해 짐 
 
   
  2. 클래스형 컴포넌트: 
      ```javascript
      //작성 형태
      class A extends Component{
        item = ...
        ...
        render( this.item ... ) //this 키워드를 이용해서 state,modify 등 변수 및 함수 접근 가능 
      }
      ```

# Hooks
- 크게 (1)State Hooks(=> for handling input), (2) Effect Hooks(=>for fetching) 로 나눌 수 있다.
  ## 1. useState
  - 사용법: 
        ```javascript import { useEffect } from 'react'``` 
        ```javascript const[ value, setValue ] = useState(초기값)```
  - useState는 array를 반환함.
  ## 2. useEffect
  - didMount, update, unmount 시 마다 특정 작업 처리 가능하게 해 주는 기능.
  - 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
  - 즉, 클래스형 컴포넌트의 생명주기를 함수형에도 적용가능해짐.
  - useEffect안에 사용하는 변수나 함수가 있다면 deps에 포함시켜주는 것이 규칙. deps를 생략하면 리렌더링될 때마다 useEffect 함수가 호출된다.
  ![image](https://user-images.githubusercontent.com/55012143/116987926-a4bc1580-ad0a-11eb-9b3f-610ff9bbfd6c.png)
  - 사용법:
      ```javascript
      useEffect( function, deps)
      
      //only didMount
      useEffect( () => {
        console.log('마운트될 때만 실행된다')
       }, []);
       
       //mount+update
       useEffect( () => {
        console.log('렌더링 될 때마다 실행된다')
       });
       ```
   - 1. 컴포넌트가 가장 처음 렌더링될 때만 실행시키고 싶을 때: 그 대상을 deps[]에 넣는다 ( 생략시 리렌더링 될때마다 실행)
        ```javascript
        useEffect( () => {
          console.log(name);
          console.log('첫렌더 때 한 번만 실행되고, 업데이트 되면 다시 실행된다')
         }, [name]);
      
   - 2. 컴포넌트가 업데이트 될 때 (state, props 변경 시)
      - 특정 값이 업데이트될 때만 실행시키고 싶을 때: 
         1. 업데이트 여부를 검사할 값은 deps에 넣는다
         2. 아래코드와 같이 작성 (그렇지 않으면 업뎃 + 마운트 될 때마다 실행됌)

            ```javascript
            const mounted = useRef(false);
            
            useEffect(() => {
              if(!mounted.current){ 
                mounted.current = true
               }else{
               ///ajax
               }
                
            },[name]);
            ```
        
 
      

  
