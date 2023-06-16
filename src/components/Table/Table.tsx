import { FunctionComponent, ReactNode } from "react";

type WrapperComponent = {
  children: ReactNode;
};

type RecordProps = {
  span?: number;
};

const Wrapper: FunctionComponent<WrapperComponent> = ({ children }) => (
  <table>{children}</table>
);

const Header: FunctionComponent<WrapperComponent> = ({ children }) => (
  <thead>{children}</thead>
);

const Heading: FunctionComponent<RecordProps & WrapperComponent> = ({
  children,
  span = 1,
}) => <td colSpan={span}>{children}</td>;

const Body: FunctionComponent<WrapperComponent> = ({ children }) => (
  <tbody>{children}</tbody>
);

const Row: FunctionComponent<WrapperComponent> = ({ children }) => (
  <tr>{children}</tr>
);

const Record: FunctionComponent<RecordProps & WrapperComponent> = ({
  children,
  span = 1,
}) => <td colSpan={span}>{children}</td>;

export { Wrapper, Header, Heading, Body, Row, Record };
