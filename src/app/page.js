import { redirect } from "next/dist/server/api-utils";



const HomePage = () => {
redirect("/Welcome");
  return <></>;
}

export default HomePage;