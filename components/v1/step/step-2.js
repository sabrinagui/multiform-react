import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
                <div className="multisteps-form__panel" data-animation="slideHorz">
                    {/* div 2 */}
                    <div className="wizard-forms">
                        <div className="inner pb-100 clearfix">
                            <div className="form-content pera-content">
                                <div className="step-inner-content">
                                    <span className="step-no bottom-line">Passo 2</span>
                                    <div className="step-progress float-right">
                                        <span>2 de 5 concluídos</span>
                                        <div className="step-progress-bar">
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>Me conte mais sobre você.</h2>
                                    <p>Preencha o formulário com as informações necessárias sobre você.</p>

                                    <div className="form-inner-area">
                                        <input type="text" name="full_name" className="form-control required" minLength="2" placeholder="Nome e Sobrenome *" required />
                                        <input type="email" name="email" className="form-control required" placeholder="Email *" required />
                                        <input type="text" name="phone" placeholder="Telefone" />
                                    </div>
                                    <div className="gender-selection">
                                        <h3>Gênero:</h3>
                                        <label>
                                            <input type="radio" name="gender" value="Male" />
                                            <span className="checkmark"></span>Masculino
										</label>
                                        <label>
                                            <input type="radio" name="gender" value="Female" />
                                            <span className="checkmark"></span>Feminino
										</label>
                                    </div>
                                    <div className="upload-documents">
                                        <h3>Upload Arquivos:</h3>
                                        <div className="upload-araa bg-white">
                                            <input type="hidden" value="" name="fileContent" id="fileContent" />
                                            <input type="hidden" value="" name="filename" id="filename" />
                                            <div className="upload-icon float-left">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <div className="upload-text">
                                                <span>( Formatos aceitos: pdf. doc/ docx -
												Tamanho : 150kb)</span>
                                            </div>
                                            <div className="upload-option text-center">
                                                <label htmlFor="attach">Anexe aqui seus arquivos</label>
                                                <input id="attach" style={{display : 'none'}} type="file" />
											</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*<!-- /.inner -->*/}
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

export default StepTwo;