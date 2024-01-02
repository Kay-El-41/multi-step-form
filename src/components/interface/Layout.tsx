import background from "../../assets/background.jpg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen md:flex md:gap-10">
      <section className="h-1/5 w-full md:h-full md:w-1/3">
        <img
          src={background}
          alt="batman logo"
          className="h-full object-cover w-full"
        />
      </section>
      <section className="self-center md:w-2/3">{children}</section>
    </main>
  );
};
