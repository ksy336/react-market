import * as React from 'react';
import { Breadcrumb } from 'antd';

const BreadCrumbs = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/">Каталог</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/single-cart">Товар</a>
        </Breadcrumb.Item>
        {/*<Breadcrumb.Item>An Application</Breadcrumb.Item>*/}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
