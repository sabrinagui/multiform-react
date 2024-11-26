import React from "react";

class StepThree extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Passo 3</span>
                                <div className="step-progress float-right">
                                    <span>3 de 5 concluídos</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Quais serviços você precisa?</h2>
                                <p>Estamos aqui para atender suas necessidades digitais! Escolha entre as opções abaixo e transforme sua ideia em realidade.</p>
                                <div className="services-select-option">
                                    <ul>
                                        <li className="bg-white active"><label>Web Design <input type="radio" name="web_service" value="Web Design" defaultChecked /></label></li>
                                        <li className="bg-white"><label>Criação de Sistemas <input type="radio" name="web_service" value="Web Development" /></label></li>
                                        <li className="bg-white"><label>Manutenção <input type="radio" name="web_service" value="Graphics Design" /></label></li>
                                        <li className="bg-white"><label>Atualização <input type="radio" name="web_service" value="SEO" /></label></li>
                                    </ul>
                                </div>
                                <div className="language-select">
                                    <p>Eu quero uma linguagem de programação específica: </p>
                                    <select name="languages">
                                        <option>HTML, CSS e Javascript</option>
                                        <option>React Js</option>
                                        <option>PHP</option>
                                        <option>Laravel</option>
                                    </select>
                                </div>
                                <div className="comment-box">
                                    <p><i className="fas fa-comments"></i> Escreva aqui mais detalhes</p>
                                    <textarea name="full_comments" placeholder="Escreva aqui"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> VOLTAR </span></li>
                            <li><span className="js-btn-next" title="NEXT">PRÓXIMO <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepThree;