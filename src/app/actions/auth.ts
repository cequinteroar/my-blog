import { signIn } from "@base/auth";
import { authenticateState, AuthenticateSchema } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "@base/src/app/lib/session";
import { db } from "@base/src/app/lib/db";
import { users } from "@base/src/app/lib/schema";
import { redirect } from "next/navigation";

export async function authenticate(prevState: authenticateState | undefined, formData: FormData) {
  // Validate form fields
  const validatedFields = AuthenticateSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return { errors: fieldErrors };
  }
  const { username, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Attempt to sign in
  const data = await db
    .insert(users)
    .values({
      username: username,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(user.id);
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
