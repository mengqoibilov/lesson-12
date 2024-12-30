import React from 'react';
import { useTranslation } from 'react-i18next';

function Users() {
  const { t } = useTranslation();
  return <h1>{t('usersDescription')}</h1>;
}

export default Users;
