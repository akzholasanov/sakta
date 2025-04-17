import { Tab } from 'shared/ui/tab';

import styles from './tabs.module.scss';

interface TabsProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export const Tabs = ({ activeTab, onChangeTab }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      <Tab
        label="For you"
        active={activeTab === 'for-you'}
        onClick={() => onChangeTab('for-you')}
      />
      <Tab
        label="Collections"
        active={activeTab === 'collections'}
        onClick={() => onChangeTab('collections')}
      />
    </div>
  );
};
