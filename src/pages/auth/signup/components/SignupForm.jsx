import { useFetcher, useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import InputBox from "../../../../components/ui/InputBox";
import Label from "../../../../components/ui/Label";

const SignupForm = () => {
  const navigate = useNavigate();
  const Fetcher = useFetcher();

  const user = Fetcher?.data?.data?.username;

  const isSubmitting = Fetcher.state === "submitting";

  if (user) {
    navigate("/login");
  }

  return (
    <Fetcher.Form
      method="POST"
      className="space-y-6"
      encType="multipart/form-data"
    >
      <InputBox>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          placeholder="john123"
        />
      </InputBox>
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
        <Label htmlFor="fullname">Fullname</Label>
        <Input
          id="fullname"
          name="fullname"
          type="text"
          required
          className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          placeholder="John Doe"
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
      <InputBox>
        <Label htmlFor="password">Avatar</Label>
        <Input
          id="avatar"
          name="avatar"
          type="file"
          required=""
          accept="image/*"
          className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          placeholder="Enter your password"
        />
      </InputBox>

      <div>
        <Button type="submit" variant="secondary" className="w-full ">
          {isSubmitting ? "Submitting..." : "SIGN UP"}
        </Button>
      </div>
    </Fetcher.Form>
  );
};
export default SignupForm;
