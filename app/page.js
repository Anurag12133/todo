import Image from "next/image";
import styles from "./page.module.css";
import Auth from "./components/auth";
import AddTodo from "./components/addtodoo";
import TodoList from "./components/todolist";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Container maxW="7xl">
        <Auth />
        <AddTodo />
        <TodoList />
      </Container>
    </div>
  );
}
