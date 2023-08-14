import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { Form } from "./components/Form";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_USER, GET_USERS } from "./queries/queries";

const LogIn = () => {
  const { data } = useQuery(GET_USERS);

  const [addUser] = useMutation(ADD_USER);

  const submitSigninForm = (data: any) => {
    addUser({ variables: { name: data.username, password: data.password } });
  };

  return (
    <Section>
      <Navbar>
        <Heading>sign in</Heading>
      </Navbar>
      <Form onSubmit={submitSigninForm} />
    </Section>
  );
};

export default LogIn;
