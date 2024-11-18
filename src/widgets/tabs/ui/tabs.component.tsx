import React, { useState, useCallback } from 'react';
import { Tab } from 'shared/ui/tab';
import styles from './tabs.module.scss';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('for-you');

  const handleTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div className={styles.tabs}>
      <Tab
        label='For you'
        active={activeTab === 'for-you'}
        onClick={() => handleTab('for-you')}
      />
      <Tab
        label='Collections'
        active={activeTab === 'collections'}
        onClick={() => handleTab('collections')}
      />
    </div>
  );
};
