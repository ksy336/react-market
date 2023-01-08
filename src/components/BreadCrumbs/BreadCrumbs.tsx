import * as React from 'react';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';

const BreadCrumbs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/">{t('catalog')}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/single-cart">{t('product')}</a>
        </Breadcrumb.Item>
        {/*<Breadcrumb.Item>An Application</Breadcrumb.Item>*/}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
