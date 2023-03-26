import Head from "next/head";
import DashboardLayout from "@/Components/Dashboard/layout";
import DashboardHeader from "@/Components/Dashboard/header"
import { Roboto } from '@next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Dashboard() {
  return (
    <>
      <Head>
        <title>SNM</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="" />
      </Head>
        <DashboardHeader />
      <main  className={roboto.className} style={{
        marginTop: "-1px",
      }}>
        <DashboardLayout />
      </main>
    </>
  );
}
