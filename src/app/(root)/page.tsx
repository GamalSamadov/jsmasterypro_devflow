import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Salom dunyo</h1>
      <h1 className="h1-bold font-inter">Salom dunyo</h1>
    </>
  );
};

export default Home;
