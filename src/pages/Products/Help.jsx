import React from "react";



function Help() {
    return (
        <section className="help-section">
            <div className="container">
                <h1 className="help-title">Помощь</h1>
                
                <div className="help-block">
                    <h2>Как пользоваться админкой</h2>
                    <p>Используйте раздел <strong>«Товары»</strong>, чтобы добавлять, редактировать или удалять товары.</p>
                    <p>В разделе <strong>«Заказы»</strong> вы можете просматривать и обрабатывать поступившие заказы.</p>
                </div>

                <div className="help-block">
                    <h2>Что делать, если что-то не работает</h2>
                    <ul>
                        <li>Обновите страницу и попробуйте снова.</li>
                        <li>Проверьте подключение к интернету.</li>
                        <li>Если проблема не решается — свяжитесь с разработчиком.</li>
                    </ul>
                </div>

                <div className="help-block">
                    <h2>Контакты поддержки</h2>
                    <p>Email: <a href="mailto:support@kfc-admin.kz">support@kfc-admin.kz</a></p>
                    <p>Телефон: +7 (777) 123-45-67</p>
                </div>
            </div>
        </section>
    );
}

export default Help;
