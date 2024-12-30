import React from 'react';
import { useTranslation } from 'react-i18next';

function Products() {
  const { t } = useTranslation();
  return <h1>{t('productsDescription')}</h1>;
}

export default Products;
