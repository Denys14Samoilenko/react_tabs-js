import cn from 'classnames';
import { getRigthTabById } from '../../helpers/helpers';

export const Tabs = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const selectedTab = getRigthTabById(tabs, selectedTabId) || tabs[0];
  const handleClick = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                className={cn({ 'is-active': selectedTab.id === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};