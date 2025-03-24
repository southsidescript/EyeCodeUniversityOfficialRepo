import { redirect } from "next/dist/server/api-utils";



const HomePage = () => {
redirect("/Welcome");
  return null;
}

export default HomePage;