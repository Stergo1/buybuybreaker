import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0f2744" }}>
      <SignUp />
    </div>
  );
}
