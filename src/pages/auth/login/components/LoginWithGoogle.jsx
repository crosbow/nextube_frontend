import Button from "../../../../components/ui/Button";

const LoginWithGoogle = () => {
  return (
    <div className="mt-6 flex space-x-4">
      <Button variant="ghost-sm">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png"
          className="w-5 h-5 mr-3"
          alt="Google"
        />
        Google
      </Button>
    </div>
  );
};
export default LoginWithGoogle;
