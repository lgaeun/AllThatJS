import ReactDOM from "react-dom";

/* Notification API(MDN참고) 이용
 * hook은 아니지만 유용한 기능이다
 */

const useNotification = (title, options) => {
  if (!("Notification" in window)) return; //브라우저 설정에서 '알림' 허용해야 사용 가능함

  const firNotif = () => {
    if (Notification.permission !== "granted") {
      //권한 없으면 요청
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          //요청했을 때 권한 granted면 노티 생성
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return firNotif;
};

function App() {
  const iconUrl = "https://image.flaticon.com/icons/png/512/1886/1886743.png";
  const trigger = useNotification("Can I steal your food?", {
    body: "your food looks nice",
    icon: iconUrl,
  });
  return (
    <div className="App">
      <button onClick={trigger}>Hello</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
