import { Tabs, Tab, SSRProvider } from 'react-bootstrap';
import Global from './Global.jsx';
import ItemsInner from './ItemsInner.jsx';

export default function Items({ items }) {

  if (import.meta.env.MODE !== "development") {
    return <></>
  }

  const playerClasses = Object.keys(itemUsedBy);
  return (
  <div className="items-root">
    <SSRProvider>
      <Tabs>
        <Tab eventKey="default" title="Default">
          <ItemsInner playerClass="default" items={[items["default"]]}  />
        </Tab>
        {playerClasses.map(playerClass => 
          <Tab key={`${playerClass}-tab`} eventKey={playerClass} title={playerClass[0].toUpperCase() + playerClass.slice(1)}>
            <ItemsInner playerClass={playerClass} items={itemUsedBy[playerClass].map(i => items[i])} />
          </Tab>
        )}
      </Tabs>
    </SSRProvider>
  </div>
  );
}
