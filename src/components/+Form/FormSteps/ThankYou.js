import React from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTitle } from '../../Layouts';

const ThankYou = ({ currentStep }) => {
  const { t } = useTranslation();

  if (currentStep !== 6) {
    return null;
  }

  return (
    <div className="form__step form__wrapper">
      <div className="form__form">
        <div className="form__thank-you">
          <div className="form__thank-you--title">
            <CustomTitle>
              {t('form.thankYou.title-1')} <br />
              {t('form.thankYou.title-2')}
              <br /> {t('form.thankYou.title-3')}
            </CustomTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
