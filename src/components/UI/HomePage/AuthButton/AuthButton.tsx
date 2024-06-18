import { getUserInfo, removeUser } from "@/service/actions/authService";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button href="/login">Login</Button>
      )}
    </>
  );
};

export default AuthButton;
