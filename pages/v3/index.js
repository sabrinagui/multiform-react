
import Step1 from '../../components/v3/step/step-1';
import Step2 from '../../components/v3/step/step-2';
import Step3 from '../../components/v3/step/step-3';
import Step4 from '../../components/v3/step/step-4';
import Step5 from '../../components/v3/step/step-5';

export default function V3() {

  return (
    <div>
      <div className="wrapper wizard d-flex clearfix multisteps-form position-relative">
        {/* for rtl */}
        {/* <div className="wrapper wizard d-flex clearfix multisteps-form position-relative" dir='rtl'> */}
        <div className="steps order-2 position-relative w-25">
          <div className="multisteps-form__progress">
            <span className="multisteps-form__progress-btn js-active" title="Application data"><i className="far fa-user"></i><span>Personal information</span></span>
            <span className="multisteps-form__progress-btn" title="Tax residency"><i className="far fa-user"></i><span>Solution Provider</span></span>
            <span className="multisteps-form__progress-btn" title="Indentity documents"><i className="far fa-user"></i><span>Personal information</span></span>
            <span className="multisteps-form__progress-btn" title="Investability"><i className="far fa-user"></i><span>Choose a payment</span></span>
            <span className="multisteps-form__progress-btn" title="Review"><i className="far fa-user"></i><span>Review </span></span>
          </div>
        </div>
        <form className="multisteps-form__form w-75 order-1" action="#" id="wizard">
          <div className="form-area position-relative">
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
          </div>
        </form>
      </div>
    </div>
  )
}