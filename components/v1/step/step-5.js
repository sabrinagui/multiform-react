import React from "react";

class StepFive extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Passo 5</span>
                                <div className="step-progress float-right">
                                    <span>5 de 5 concluídos</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Ultimo passo</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <div className="step-content-field">
                                    <div className="date-picker date datepicker">
                                        <input type="text" name="date" className="form-control" />
                                            <div className="input-group-append"><span>Prazo estimado</span></div>
										</div>
                                        <div className="plan-area">
                                            <div className="plan-icon-text text-center active">
                                                <div className="plan-icon">
                                                    <i className="fas fa-chess-queen"></i>
                                                </div>
                                                <div className="plan-text">
                                                    <h3>Unlimited Plan</h3>
                                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                    <input type="radio" name="your_plan" value="Unlimited Plan" defaultChecked />
                                                </div>
                                            </div>
                                            <div className="plan-icon-text text-center">
                                                <div className="plan-icon">
                                                    <i className="fas fa-cubes"></i>
                                                </div>
                                                <div className="plan-text">
                                                    <h3>Limited Plan</h3>
                                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                    <input type="radio" name="your_plan" value="Unlimited Plan" />
												</div>
                                                </div>
                                            </div>
                                        
                                           
                                           
                                            <div className="comment-box">
                                                <textarea name="extra-message" placeholder="Algum detalhe que queira comentar?"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="actions">
                                <ul>
                                    <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> VOLTAR </span></li>
                                    <li><button type="submit" title="NEXT">ENVIAR <i className="fa fa-arrow-right"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default StepFive;