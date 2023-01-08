import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import './Switch.css';

const SwitchLang = () => {
  const [cookies, setCookie] = useCookies(['lang']);
  const lang = cookies.lang;
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      setChecked(lang === 'ru');
    }
  }, [lang]);

  const onChangeLang = (checked: boolean) => {
    const lang = checked ? 'ru' : 'en';
    i18n.changeLanguage(lang);
    setCookie('lang', lang);
    setChecked(lang === 'ru');
  };

  return <Switch checked={checked} className="switch" checkedChildren={t('ru')} unCheckedChildren={t('en')} onChange={onChangeLang} />;
};

export default SwitchLang;
