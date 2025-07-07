import BottomNavBar from "../ui/layout/BottomNavBar";
import Header from "../ui/layout/Header";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <BottomNavBar />
    </>
  );
}
