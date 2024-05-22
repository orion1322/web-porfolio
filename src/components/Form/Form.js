import "./form.css"

function Form (){
    return(
    <div id="open-form" className="form-contact">
        <div className="form-body">
            <div className="form-content">
                
                    <a href="#" className="form-close">
                        <button type="submit" className="btn-form-close"></button>
                    </a>
            
                <div className="form-title">
                    <h2>Отклик</h2>
                </div>
                <form className="form-box" method="get">
                    <div className="in-form-box">
                        <div className="form-left">
                            <div className="input-box-form">
                                <input type="text" name="fio" className="input-form" placeholder="ФИО"/>
                            </div>
                            <div className="input-box-form">
                                <input type="text" name="ad" className="input-form"  placeholder="Тел"/>
                            </div>
                        </div>
                        <div className="form-right">
                            <div className="input-box-form">
                                <input type="text" name="ad" className="input-form"  placeholder="Почта"/>
                            </div>
                            <div className="input-box-form">
                                <input type="text" name="ad" className="input-form"  placeholder="что нибудь"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-comm">
                        <textarea className="input-form-comm" placeholder="Расскажите о себе"></textarea>
                    </div>
                    <div className="form-box-btn">
                    <button type="submit" className="btn-form">Отправить</button>
                </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default Form;
