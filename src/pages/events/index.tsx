import { SongkickEventObject } from '@/types/events/events';
import useSWR from 'swr';
import { Section } from '@/components/Section/Section';
import { Navbar } from '@/components/Navbar/Navbar';
import { Heading } from '@/components/Heading/Heading';
import { useFetcher } from '@/hooks/useFetcher/useFetcher';
import { EventsTable } from './modules/EventsTable';
import { Tabs } from '@/components/Tabs/Tabs';
import { TabConfig } from '@/components/Tabs/types';
import { useContext } from 'react';
import { ModalContext, ModalContextProps } from '@/context/modalContext';
import { Modal } from '@/components/Modal/Modal';
import { AddEventFormProps, Form } from './components/Form';
import Button from '@/components/Button/Button';

const Events = () => {
  const fetcher = useFetcher<Array<SongkickEventObject>>();
  const { data, error, isLoading } = useSWR<Array<SongkickEventObject>>(
    'api/events',
    fetcher
  );
  const { setModalComponent, closeModal } = useContext(
    ModalContext
  ) as ModalContextProps;

  const onSubmit = (data: AddEventFormProps, closeModal: VoidFunction) => {
    console.log(data);
    closeModal();
  };

  const tabsObj: TabConfig = {
    tab1: {
      label: 'Table View',
      panelContent: (
        <>
          {isLoading ? (
            <>Loading...</>
          ) : !error ? (
            <EventsTable events={data} />
          ) : (
            <>error</>
          )}
        </>
      ),
    },
    tab2: {
      label: 'Calendar View',
      panelContent: (
        <div>
          <div>calendar here</div>
        </div>
      ),
    },
  };

  return (
    <Section>
      <Navbar>
        <Heading>events</Heading>
        <Button
          label='add-event'
          onClick={() => {
            setModalComponent(
              <Modal closingHandler={closeModal}>
                <>
                  <h2>Add Event</h2>
                  <Form
                    onSubmit={(data) => onSubmit(data, closeModal)}
                    onCancel={closeModal}
                  />
                </>
              </Modal>
            );
          }}>
          Add
        </Button>
      </Navbar>
      <Tabs tabsConfig={tabsObj} />
    </Section>
  );
};

export default Events;
