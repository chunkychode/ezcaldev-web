import { useRouter } from "next/router";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

export const ContinueToLogin = () => {
  const { mutateUser } = useUser();
  const router = useRouter();

  return (
    <a
      href="/api/logout"
      onClick={async (e) => {
        e.preventDefault();
        await mutateUser(fetchJson("/api/logout"));
        router.push("/login");
      }}
    >
      Continue to login
    </a>
  );
};
