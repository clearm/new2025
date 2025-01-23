export default function Test3() {

    const buttonStyle = {
        backgroundColor: "#3498db",
        color: "white",
        fontWeight: "bold",
        padding: "10px 10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    };

    function handleClick() {
        // 전체 body 스타일 수정
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
        } else {
          bodyStyle.backgroundColor = 'black';
        }
    }

    function onChangeColor(){
        alert('자식 버튼 클릭! 부모반응하지맛! ')
    }

    const handleChildClick = (e) => {
        e.stopPropagation();  // 이벤트의 전파를 막아서 div 클릭한거 안나오야함.
        alert('자식 버튼 클릭! 부모반응하지맛! ')
    }

    const handleLinkClick = (e) => {
        e.preventDefault(); // 링크의 기본 동작 , 이동을 막음
        alert("링크 클릭 막음!");
    }


    return (
      <div className="Toolbar " onClick={() => {
        alert('You clicked on the toolbar 라는 div 을 클릭 한 것임. ');
      }}>

        <button style={buttonStyle} onClick={() => alert('New BTN!')}>
          기본버튼 스타일
        </button >

        <button className="button"  onClick={() => alert('Playing!')}>
          Play Movie
        </button >
        <button className="button"  onClick={() => alert('Uploading!')}>
          Upload Image
        </button >

        {/* <button onClick={alert('You clicked me!')} > </button>  이거 렌더링 될때 마다 실행됨  */}

        <button className="button" onClick={() => alert('You clicked me!')}> 한번 클릭하면 실행 </button>

        <button className="button"  onClick={handleClick}>
            handleClick 호출
        </button>

        <button className="button" onClick={e => {
            e.stopPropagation();
            onChangeColor();
        }}
        >
            이건또 이런방식이 있음
        </button>
        <button className="button" onClick={handleChildClick} style={{ padding: "10px" }}>
          자식 버튼
        </button>

        <a href="https://naver.com" target='_blank' onClick={handleLinkClick} rel="noreferrer" >
            e.preventDefault()  이벤트의 기본 브라우저 동작을 막습니다.
            예를 들어, 링크 클릭 시 이동하거나,
            폼 제출 시 새로고침되는 기본 동작을 방지합니다.
        </a>

      </div>
    );

}