import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2eD4r197U4mTycyCNdSMa2UKytz",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};