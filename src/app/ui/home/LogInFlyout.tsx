"use client";
import { greatvibes } from "@/app/ui/fonts";
import { Button } from "@/app/ui/button";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import clsx from "clsx";
import { authenticate } from "@/app/actions/auth";

interface LoginPageProps {
  redirectTo?: string;
  classNames?: string;
}

export default function LoginFlyout({ redirectTo = "/dashboard", classNames = undefined }: LoginPageProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const formClassNames = clsx("top-15 right-0 absolute", classNames);
  return (
    <form action={formAction} className={formClassNames}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-4 dark:bg-zinc-900 dark:text-white">
        <div className="w-full">
          <div>
            <label className="mb-3 mt-3 block text-xs font-medium text-gray-900 dark:text-gray-100" htmlFor="email">
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm border-1 placeholder:text-gray-100"
                id="username"
                type="string"
                name="username"
                placeholder="Enter your user name"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-100" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm border-1 placeholder:text-gray-100"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-4 w-1/2 border-1 border-color-white justify-self-center">
          Log in
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-auto h-5 w-5 text-gray-50"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </Button>
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>

              <p className="text-sm text-red-500">{errorMessage.message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
