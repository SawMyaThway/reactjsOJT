import React from 'react';
import { Breadcrumb } from 'antd';

class GroupSetting extends React.Component {
  render() {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>GroupSetting</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              This is GroupSetting Componenttttttttttttttttt
            </div>
        </>
    );
  }
}

export default GroupSetting;