import React, {FC} from 'react';
import styles from 'styles/layouts/layout.module.scss';

const Layout: FC = ({children}) => {
  return (
    <section className={styles.layout}>
      <div className={styles.layout__page}>
        {children}
      </div>
    </section>
  );
};

export default Layout;