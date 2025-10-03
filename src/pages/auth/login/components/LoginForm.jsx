import { useFetcher, useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import InputBox from "../../../../components/ui/InputBox";
import Label from "../../../../components/ui/Label";

const LoginForm = () => {
  const Fetcher = useFetcher();
  const navigate = useNavigate();

  // TODO: Mange localStorage efficiently <- TODO HERE
  if (Fetcher?.data?.success) {
    localStorage.setItem("accessToken", Fetcher.data.data.accessToken);
    localStorage.setItem("refreshToken", Fetcher.data.data.refreshToken);
    navigate("/");
  }

  const isSubmitting = Fetcher.state == "submitting";
  return (
    <Fetcher.Form method="POST" className="space-y-6">
      <InputBox>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          placeholder="you@example.com"
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required=""
          className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          placeholder="Enter your password"
        />
      </InputBox>

      <div>
        <Button type="submit" variant="secondary" className="w-full ">
          {isSubmitting ? "Submitting..." : "SIGN IN NOW"}
        </Button>
      </div>
    </Fetcher.Form>
  );
};
export default LoginForm;
