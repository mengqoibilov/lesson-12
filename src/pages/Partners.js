import React from 'react';
import { useTranslation } from 'react-i18next';

function Partners() {
  const { t } = useTranslation();
  return <h1>{t('partnersDescription')}</h1>;
}

export default Partners;
