

import { Button } from 'primereact/button';
import dayjs from 'dayjs';
import { startCase } from 'lodash';

function App() {
  const today = dayjs().format('DD/MM/YYYY h:mm')
  const label = startCase('last_modified_date');

  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello world! {today}
      </h1>
      <p>{label}</p>
      <div className="grid grid-cols-7 gap-4">
        <Button icon="pi pi-check" aria-label="Filter" />
        <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" severity="success" aria-label="Search" />
        <Button icon="pi pi-user" severity="info" aria-label="User" />
        <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
      </div>
    </div>
  );
}

export default App;
