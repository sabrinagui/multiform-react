import React from "react";

class StepFour extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Passo 4</span>
                                <div className="step-progress float-right">
                                    <span>4 de 5 concluídos</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width:'70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Quais serviços você precisa?</h2>
                                <p>Estamos aqui para atender suas necessidades digitais! Escolha entre as opções abaixo e transforme sua ideia em realidade.</p>
                                <div className="step-content-area">
                                    <div className="budget-area">
                                        <p><i className="fas fa-dollar-sign"></i> Orçamento</p>
                                        <select name="budget">
                                            <option>R$390 - R$600</option>
                                            <option>R$390 - R$600</option>
                                            <option>R$390 - R$600</option>
                                            <option>R$390 - R$600</option>
                                            <option>R$390 - R$600</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                        <p><i className="fas fa-comments"></i> Suporte requerido</p>
                                        <select name="support_period">
                                            <option>2 a 6 meses</option>
                                            <option>6 a 9 meses</option>
                                            <option>9 a 12 meses</option>
                                            <option>1 a 5 anos</option>
                                            <option>Vitalício</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                    
                                        <p>Seu objetivo é:</p>
                                        <div className="opti-list">
                                            <ul className="d-md-flex">
                                                <li className="bg-white active"><input type="checkbox" name="code_opti1" value="Semantic coding" defaultChecked /> Site Institucional</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti2" value="Mobile APP" />E-commerce</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti3" value="Mobile Design" />Sistema Personalizado</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="comment-box">
                                        <p><i className="fas fa-comments"></i> Escreva mais detalhes</p>
                                        <textarea name="comments-note" placeholder="Mais detalhes aqui"></textarea>
                                    </div>
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

export default StepFour;