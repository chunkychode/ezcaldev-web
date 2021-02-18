import React from "react";
import Link from "next/link";
import useUser from "../lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "../lib/fetchJson";

const Header = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <>
      <nav className="w-full z-30 bg-white top-0 text-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              href="/"
            >
              EZCALDEV
            </a>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              href="/docs"
            >
              Docs
            </a>
            {!user?.isLoggedIn && (
              <Link href="/login" passHref>
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                  type="button"
                >
                  Login
                </a>
              </Link>
            )}
            {user?.isLoggedIn && (
              <>
                <Link href="/profile-ssr">
                  <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
                    welcome {user.email}
                  </a>
                </Link>

                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(fetchJson("/api/logout"));
                    router.push("/login");
                  }}
                >
                  Logout
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
