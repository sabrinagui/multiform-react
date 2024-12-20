import React from "react";

class StepOne extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                {/* div 1 */}
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no">Passo 1</span>
                                <h2>Quais serviços você precisa?</h2>
                                <p>
                                Estamos aqui para atender suas necessidades digitais! Escolha entre as opções abaixo e transforme sua ideia em realidade.
                                </p>
                                <div className="step-box">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position active">
                                                <span className="step-box-icon">
                                                    <img src={"/assets/v1/img/d1.png"} alt="" />
                                                </span>
                                                <span className="step-box-text">Criação de Sites</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Corporate Services"
                                                            defaultChecked
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon">
                                                    <img src={"/assets/v1/img/d2.png"} alt="" />
                                                </span>
                                                <span className="step-box-text">Desenvolvimento de Sistemas</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Freelancing Services"
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon">
                                                    <img src={"/assets/v1/img/d3.png"} alt="" />
                                                </span>
                                                <span className="step-box-text">Manutenção e Atualização</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Development Services"
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.inner */}
                    <div className="actions">
                        <ul>
                            <li className="disable" aria-disabled="true">
                                <span className="js-btn-next" title="NEXT">
                                    Backward <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                            <li>
                                <span className="js-btn-next" title="NEXT">
                                   PRÓXIMO <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

        );
    }
}

export default StepOne;