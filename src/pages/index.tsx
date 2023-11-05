import { FormEvent, useContext, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <form
          className="flex flex-col rounded-2xl bg-gray-400 p-8"
          onSubmit={handleSubmit}
        >
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit"> Enter </Button>
        </form>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
