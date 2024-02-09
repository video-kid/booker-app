import Button from '@/components/Button/Button';
import { useForm } from 'react-hook-form';

export type AddEventFormProps = {
  name: string;
  date: number | null;
  venue: string;
};

const initialFormValues: AddEventFormProps = {
  name: '',
  date: null,
  venue: '',
};

type FormProps = {
  onSubmit: (data: AddEventFormProps) => void;
  onCancel: VoidFunction;
  initialValues?: AddEventFormProps;
};

export const Form = ({
  onSubmit,
  onCancel,
  initialValues = initialFormValues,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEventFormProps>({
    defaultValues: initialValues,
    mode: 'all',
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='name'
        {...register('name', { required: true })}
      />
      <input
        type='number'
        placeholder='date'
        {...register('date', { required: true })}
      />
      <input
        type='text'
        placeholder='venue'
        {...register('venue', {})}
      />

      <Button
        label='cancel'
        onClick={onCancel}>
        Cancel
      </Button>
      <Button
        label='save'
        type='submit'>
        Save
      </Button>
    </form>
  );
};
