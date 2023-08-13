import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { Form } from "./components/Form";
import { gql, useQuery, useMutation } from "@apollo/client";

const onSubmit = async (data: any) => {
  const resp = await client.query({
    query: gql`
      mutation {
        insert_users(objects: [{ name: "bla", id: "69" }]) {
          returning {
            name
          }
        }
      }
    `,
  });
  return {
    props: {
      response: resp,
    },
  };
};

const Signin = () => {
  const GET_USERS = gql`
    query getUsers {
      users {
        name
      }
    }
  `;
  const { data } = useQuery(GET_USERS);
  console.log(data);
  const ADD_USER = gql`
    mutation {
      insert_users(objects: [{ name: "bla", id: "69" }]) {
        returning {
          name
        }
      }
    }
  `;
  const [mutateFunction, bbb] = useMutation(ADD_USER);
  return (
    <Section>
      <Navbar>
        <Heading>sign in</Heading>
      </Navbar>
      <Form onSubmit={mutateFunction} />
    </Section>
  );
};

export default Signin;
