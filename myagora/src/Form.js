// 1. 이전에 만든 아고라스테이츠에서 Form코드 복사해오기
// ! JSX 변환하기 
// 2. class를 className으로 교체 , for-> htmlFor, input 닫는 태그 추가 


export const Form = () => {
    return (
<section className="form__container">
    <form action="" method="get" className="form">
        <div className="form__input--wrapper">
        <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" required=""></input>
        </div>
        <div className="form__input--title">
            <label htmlFor="name">Enter your title: </label>
            <input type="text" name="name" id="name" required=""></input>
        </div>
        <div className="form__textbox">
            <label htmlFor="story">Your question: </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required=""></textarea>
        </div>
        </div>
        <div className="form__submit">
        <button className="submit_button">submit</button>
        </div>
    </form>
    </section>
)}