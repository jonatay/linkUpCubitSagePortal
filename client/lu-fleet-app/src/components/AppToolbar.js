import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';

import Nav from './Nav';
import KebabMenu from './KebabMenu';

const AppToolbar = () => (
      <Toolbar
        themed
        nav={<Nav />}
        title="link-up"
        actions={<KebabMenu id="toolbar-themed-kebab-menu" />}
      />
)

export default AppToolbar;
