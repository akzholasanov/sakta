import { useState } from 'react';
import styles from './header.module.scss';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowNav(false);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { title: 'home', path: '/' },
    { title: 'about us', path: '/about' },
    { title: 'join', path: '/join' },
  ];
  console.log(location)

  return (
    <motion.header
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,
          alignItems: 'center',
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 200,
          borderRadius: 22,
          alignItems: 'start',
          transition: { delay: 0 },
        },
      }}
      initial={'short'}
      animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
      transition={{
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }}
    >
      <nav className={styles.header_nav}>
        <motion.ul
          className="flex items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
              transition: { duration: 0.6, delay: 0  },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0  },
            },
          }}
        >
          {links.map(({ title, path }) => (
            <motion.li
              key={path}
              className={clsx(styles.link, { [styles.link_active]: location.pathname === path })}
              style={{ display: hidden && location.pathname !== path ? 'none' : 'block' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <a href={path}>{title}</a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};
