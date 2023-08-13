import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { Form } from "./components/Form";
import { useForm } from "react-hook-form";

const Events = () => {
  const onSubmit = (data: any) => console.log(data);
  return (
    <Section>
      <Navbar>
        <Heading>sign in</Heading>
      </Navbar>
      <Form onSubmit={onSubmit} />
    </Section>
  );
};

export default Events;
